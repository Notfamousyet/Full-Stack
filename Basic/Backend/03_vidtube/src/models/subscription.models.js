import mongoose, { Schema } from "mongoose";

/*
Subscription Schema Fields:
- id: ObjectId (Auto-generated)
- subscriber: ObjectId referencing the User model (the one who is subscribing)
- channel: ObjectId referencing the User model (the one being subscribed to)
- createdAt: Date (Handled by timestamps)
- updatedAt: Date (Handled by timestamps)
*/

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);