/*
Comment Schema Fields:
- id: ObjectId (Auto-generated)
- content: string (Required)
- video: ObjectId referencing the Video model (Required)
- owner: ObjectId referencing the User model (Required)
- createdAt: Date (Handled by timestamps)
- updatedAt: Date (Handled by timestamps)
*/

import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentSchema);