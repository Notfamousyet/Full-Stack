import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load .env from project root regardless of ES module evaluation order
dotenv.config({ path: path.resolve(__dirname, "../../.env") })
    // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudiary=async (localFilePath)=>{
    try {
        if (!localFilePath) return null
        const response=await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"
            }
        )
        console.log("File uploaded on cloudinary. File src: "+response.url)
        //once file uploaded we will delete it from our server
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.log("Cloudinary upload error:",error)
        if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudiary}