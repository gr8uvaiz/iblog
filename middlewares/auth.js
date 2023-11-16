const {getUser} = require('../services/auth')
module.exports.isAuthenticated = function (req,res,next){
    const token = req.cookies?.uid;
    req.user = null;
    if(!token) return next();
    const user = getUser(token);
    if(!user) return next();
    req.user = user;
    return next();

}