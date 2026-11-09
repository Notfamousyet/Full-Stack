/*
Playlist Schema Fields:
- id: ObjectId (Auto-generated)
- name: string (Required)
- description: string (Required)
- videos: Array of ObjectIds referencing the Video model
- owner: ObjectId referencing the User model
- createdAt: Date (Handled by timestamps)
- updatedAt: Date (Handled by timestamps)
*/

import mongoose, { Schema } from "mongoose";

const playlistSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    videos:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true}
)
export const Playlist=mongoose.model("Playlist",playlistSchema)