/*
    Here we will add on middlelayer so it can check accesstoken by first decrypting what we have recived store it in req and then we will check
*/

import {User} from "../models/user.models.js"
import { ProjectMember } from "../models/projectmember.models.js"
import { ApiErrors } from "../utils/api-errors.js"
import { asyncHandler } from "../utils/async-handler.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

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
});

export const validateProjectPermission=(roles=[])=> asyncHandler(async (req,res,next)=>{
    const {projectId}=req.params;
    if(!projectId){
        throw new ApiErrors(400,"project id is missing");
    }
    const project=await ProjectMember.findOne({
        project: new mongoose.Types.ObjectId(projectId),
        user: new mongoose.Types.ObjectId(req.user._id)
    })
    if(!project){
        throw new ApiErrors(400,"Project nt found");
    }
    const givenRole=project?.role
    req.user.role=givenRole // line is used to attach the user's fetched role directly to the request object (req) so that it can be passed along to the next functions in your Express application.
    if(!roles.includes(givenRole)){
        throw new ApiErrors(403,"You do not have permission to perform this action")
    }
    next();
})