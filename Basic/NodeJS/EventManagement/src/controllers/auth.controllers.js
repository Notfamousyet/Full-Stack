/* 
Here we are regestering a user for that 
1) take some data 
2)validate data
3) check in DB if user already exist or Not
4) save the new user(AT,RT,GT,sendMail)
5) user verification => email
6) send response back to the requester
*/

import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/api-response.js"
import { asyncHandler } from "../utils/async-handler.js"
import { ApiErrors } from "../utils/api-errors.js"
import {emailVerificationMailgenContent, sendEmail} from "../utils/mail.js"
// First we will check user exist or not

const generateAcessAndRefreshToken=async (userID) =>{
    try {
        const user=await User.findById(userID)
        const accessToken =user.generateAccessToken()
        const refreshToken =user.generateRefreshToken()
        user.refreshToken=refreshToken
        await {accessToken,refreshToken}
    } catch (error) {
       throw new ApiError(
        500,
        "Something went wrong while generating access token"
       ) 
    }
}

const registerUser=asyncHandler(async(req,res)=>{
    const {email,username,password,role}=req.body
    const existUser=await User.findOne({
        $or:[{username},{email}]
    })
    if(existUser){
        throw new ApiErrors(409,"User with email or username already exists",[])
    }
    const user = await User.create({
        email,
        password,
        username,
        isEmailVerified:false
    })
    const {unHashedToken,hashedToken,tokenExpiry}=user.generateTemporaryToken()

    user.emailVerificationToken=hashedToken
    user.emailVerificationExpiry=tokenExpiry
    await user.save({validateBeforeSave:false})
    await sendEmail({
        email:user?.email,
        subject: "Please verify your email",
        mailgenContent: emailVerificationMailgenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`
        )
    })
    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
    )
    if(!createdUser){
        throw new ApiErrors(500,"Something went wrong while registering a user")
    }
    return res.status(201).json(
        new ApiResponse(
            200,
            {user:createdUser},
            "User registered successfully and verification email has been sent on your email"        
    ))
})

export {registerUser}