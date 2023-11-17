const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports.hashPasswordfunc = async function(plainPassword){
    try {
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(plainPassword,salt);
        return hash;
        
    } catch (error) {
        console.log("error in hashPassowrd",error)
    }
}
module.exports.checkHashPassword = async function(plainPassword,hashPassowrd){
    try {
        const result = await bcrypt.compare(plainPassword,hashPassowrd);
        return result;
    } catch (error) {
        return undefined;   
    }
}