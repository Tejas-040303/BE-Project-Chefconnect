import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId, 
      ref: "User", // Reference to the User model
      required: true,
    },
    chef: {
      type: Schema.Types.ObjectId,
      ref: "Chef", // Reference to the Chef model
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeSlot: {
      type: String,
      enum: [
        "Breakfast (7:00 AM - 10:00 AM)",
        "Lunch (12:00 PM - 3:00 PM)",
        "Dinner (6:00 PM - 9:00 PM)",
      ],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default model("Booking", bookingSchema);
