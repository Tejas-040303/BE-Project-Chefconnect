// server/models/User.js
import { Schema, model } from "mongoose";

const chefSchema = new Schema({
  name: {type:String, required:true, unique:true, defaultValue:"Chef"},
  email: { type: String, required: true, unique: true },
  hotel: {type:String, default:"None"},
  location: { type: String, required: true },
  password: { type: String, required: true },
});

export default model("User", userSchema);