// server/models/User.js
import { Schema} from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  name: {type:String, required:true, defaultValue:"User"},
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;


// demo user below
// import dotenv from "dotenv";

// dotenv.config();

// const mongo_url = "mongodb://127.0.0.1:27017/Chefconnect";

// const seedDatabase = async () => {
//   try {
//     const user = new User({
//       name: "John Doe",
//       username: "johndoe",
//       email: "johndoe@example.com",
//       dob: new Date("1985-06-15"),
//       location: "New York",
//       password: "password123",
//     });

//     await user.save();
//     console.log("Database seeded!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("Error seeding database:", err);
//     mongoose.connection.close();
//   }
// };

// seedDatabase();
// close();
