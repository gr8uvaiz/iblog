const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'});
const dbUrl = process.env.DATBASE_URL;

mongoose.connect(dbUrl).then(()=>{console.log("Database Succesfully Connected")})
.catch((error)=>{console.log("Error in Connecting Database")})

const db = mongoose.connection;
 
module.exports = db