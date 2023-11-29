const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'});
cloudinary.config({ 
  cloud_name: process.env.CLOUDNAME, 
  api_key: process.env.APIKEY, 
  api_secret: process.env.APISECRET 
});

module.exports.uploadOnCloudinary = async function(fileName){
    try {
        if(!fileName) return null;
        const uploadsDirectory = path.resolve(__dirname,'../public/uploads/');
        const filePath = path.join(uploadsDirectory, fileName);
        const result = await cloudinary.uploader.upload(filePath);
        if(result) fs.unlinkSync(filePath)
        return result;
    } catch (error) {
        return error;
    }

}