const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["NORMAL","ADMIN"],
        default: "NORMAL"
    }

},{timestamps: true});

const User = mongoose.model("user",userSchema)
module.exports = User;