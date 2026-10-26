import { User } from "../models/user.models.js"
import {Project} from "../models/project.models.js"
import {ProjectMember} from "../models/projectmember.models.js"

import { ApiResponse } from "../utils/api-response.js"
import { asyncHandler } from "../utils/async-handler.js"
import { ApiErrors } from "../utils/api-errors.js"

const getProjects=asyncHandler(async(req,res)=>{

})
const getProjectById=asyncHandler(async(req,res)=>{
    
})
const createProject=asyncHandler(async(req,res)=>{
    
})
const updateProjects=asyncHandler(async(req,res)=>{

})
const deleteProjects=asyncHandler(async(req,res)=>{

})
const addMembersToProjects=asyncHandler(async(req,res)=>{

})
const getProjectMembers=asyncHandler(async(req,res)=>{

})
const updateMemberRole=asyncHandler(async(req,res)=>{

})
const deleteMember=asyncHandler(async(req,res)=>{

})

export {
    deleteMember,
    updateMemberRole,
    getProjectMembers,
    addMembersToProjects,
    deleteProjects,
    updateProjects,
    createProject,
    getProjectById,
    getProjects
}

