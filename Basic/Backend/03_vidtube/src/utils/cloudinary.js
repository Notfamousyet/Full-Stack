import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from "fs"


    // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudiary=async (localFilePath)=>{
    try {
        if (!localFilePath) return null
        const reponse=await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"
            }
        )
        console.log("File uploaded on cloudinary. File src: "+response.url)
        //once file uploaded we will delete it from our server
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudiary}