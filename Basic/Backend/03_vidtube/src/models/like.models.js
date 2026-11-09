/*
Like Schema Fields:
- id: ObjectId (Auto-generated)
- video: ObjectId referencing the Video model (Optional - if liked)
- comment: ObjectId referencing the Comment model (Optional - if liked)
- tweet: ObjectId referencing the Tweet model (Optional - if liked)
- likedBy: ObjectId referencing the User model (Required)
- createdAt: Date (Handled by timestamps)
- updatedAt: Date (Handled by timestamps)
*/

import mongoose,{Schema} from "mongoose";

const likeSchema=new Schema({
    video:{
        type:Schema.Types.ObjectId,
        ref:"Video"

    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
    tweet:{
        type:Schema.Types.ObjectId,
        ref:"Tweet"
    },
    likedBy:{
        type:Schema.Types.ObjectId,
        ref:"User" 
    }
},{timestamps:true}
)
export const Like=mongoose.model("Like",likeSchema)
