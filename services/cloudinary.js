const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path')
cloudinary.config({ 
  cloud_name: 'duq1hzdug', 
  api_key: '689697525311616', 
  api_secret: 'dWSyVpLu451OoMTLwNBBMtBbcEE' 
});

module.exports.uploadOnCloudinary = async function(fileName){
    try {
        if(!fileName) return null;
        const uploadsDirectory = path.resolve('./public/uploads/');
        const filePath = path.join(uploadsDirectory, fileName);
        const result = await cloudinary.uploader.upload(filePath);
        if(result) fs.unlinkSync(filePath)
        return result;
    } catch (error) {
        return error;
    }

}