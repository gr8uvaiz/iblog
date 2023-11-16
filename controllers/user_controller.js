const User = require('../models/user');
const Auth = require('../services/auth')
module.exports.login = function (req,res){
    res.render('login',{
        title: "Login | IBlog",
    })
}
module.exports.signup = function (req,res){
    res.render('signup',{
        title: "SignUp | IBlog",
    })
}
module.exports.createUser = async function(req,res){
    const {name,email,password} = req.body;
    const user = await User.findOne({ email });
    if(!user){
     await User.create({
            name: name,
            email: email,
            password: password,
        })
    }else{
        return res.redirect('/user/signup')
    }
    return res.redirect('/user/login')
}

module.exports.authenticateUser = async function(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(user && password === user.password){
        const token = Auth.setUser(user);
        res.cookie("uid",token);
        return res.redirect('/')
    }
    return res.redirect('/user/login')
}