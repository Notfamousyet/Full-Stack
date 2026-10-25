/*
    Here we will add on middlelayer so it can check accesstoken by first decrypting what we have recived store it in req and then we will check
*/

import {User} from "../models/user.models.js"
import { ApiErrors } from "../utils/api-errors.js"
import { asyncHandler } from "../utils/async-handler.js"
import jwt from "jsonwebtoken"

export const verifyJWT=asyncHandler(async(req,res,next)=>{
    const token= req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
    if(!token){
        throw new ApiErrors(401,"Unauthorized request")
    }
    try {
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user= await User.findById(decodedToken?._id).select("-password -refreshToken -emailVerificationToken -emailVerificationExpiry")
        if(!user){
            throw new ApiErrors(401,"Invalid access token")
        }
        req.user=user
        next()
    } catch (error) {
        throw new ApiErrors(401,"Invalid access token")
    }
})