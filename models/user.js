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
    },
    bio:{
        type: String,
        default: "Hi ! I am User of IBlog"
    },
    profileImg:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

},{timestamps: true});

const User = mongoose.model("user",userSchema)
module.exports = User;