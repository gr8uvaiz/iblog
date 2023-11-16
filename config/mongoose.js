const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Blogs').then(()=>{console.log("Database Succesfully Connected")})
.catch((error)=>{console.log("Error in Connecting Database")})

const db = mongoose.connection;
 
module.exports = db