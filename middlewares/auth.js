const {getUser} = require('../services/auth')
module.exports.isAuthenticated = function (req,res,next){
    const token = req.cookies?.uid;
    req.user = null;
    if(!token) next();
    const user = getUser(token);
    if(!user) next();
    req.user = user;
    next();

}