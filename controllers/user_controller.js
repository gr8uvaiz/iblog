const User = require('../models/user');
const Auth = require('../services/auth')
module.exports.login = function (req, res) {
    if (!req.user) {
        return res.render('login', {
            title: "Login | IBlog",
            user: req.user
        })
    }
    return res.redirect('/')
}
module.exports.signup = function (req, res) {
    if (!req.user) {
        res.render('signup', {
            title: "SignUp | IBlog",
            user: req.user
        })
    }
    return res.redirect('/')
}
module.exports.createUser = async function (req, res) {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        await User.create({
            name: name,
            email: email,
            password: password,
        })
    }
    else {
        return res.render('signup',{
            title: "Signup | IBlog",
            err: "User Already Exist"
        })
    }
    return res.redirect('/user/login');
}

module.exports.authenticateUser = async function (req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user && password === user.password) {
        const token = Auth.setUser(user);
        res.cookie("uid", token);
        return res.redirect('/')
    }
    else{
        return res.render('login',{
            title: "Login | IBlog",
            err: "Invalid Username or password"
        })
    }
}
module.exports.destroy = function (req, res) {
    res.clearCookie('uid');
    return res.redirect('/');
}