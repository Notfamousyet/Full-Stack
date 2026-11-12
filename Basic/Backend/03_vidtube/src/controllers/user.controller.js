import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/user.models.js"
import { uploadOnCloudiary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser=asyncHandler(async(req,res)=>{
    const {fullName,email,username,password}=req.body

    // validation
    if([fullName,username,email,password].some((field)=> field?.trim()==="")){
        throw new ApiError(400,"All fields are required")
    }
    const existedUser=await User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exist")
    }

    const avatarLocalPath=req.files?.avatar?.[0]?.path
    const coverLocalPath=req.files?.coverImage?.[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is missing")
    }
    // const avatar=await uploadOnCloudiary(avatarLocalPath)
    // let coverImage=""
    // if(coverLocalPath){
    //     coverImage=await uploadOnCloudiary(coverImage)
    // }

    let avatar;
    try {
        avatar =await uploadOnCloudiary(avatarLocalPath)
        console.log("uploaded avatar",avatar)
    } catch (error) {
        console.log("Error uploading avatar",error)
        throw new ApiError(500,"Failed to upload avatar")
    }
    if(!avatar){
        throw new ApiError(500,"Failed to upload avatar")
    }

    let coverImage;
    try {
        coverImage =await uploadOnCloudiary(coverLocalPath)
        console.log("uploaded coverImage",coverImage)
    } catch (error) {
        console.log("Error uploading CoverImage",error)
        throw new ApiError(500,"Failed to upload CoverImage")
    }
    if(coverLocalPath && !coverImage){
        throw new ApiError(500,"Failed to upload cover image")
    }

    const user =await User.create({
        fullName,
        avatar:avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })
    const createdUser= await User.findById(user._id).select("-password -refreshToken")
    
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering a user")
    }

    return res
        .status(201)
        .json( new ApiResponse(200,createdUser,"User registered successfully"))


})

export {
    registerUser
}