const jwt = require('jsonwebtoken')

const secret = '@Uvaiz123'

module.exports.setUser = function(user){
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    },secret)
}
module.exports.getUser = function(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret)
    } catch (error) {
        return null;
    }
}