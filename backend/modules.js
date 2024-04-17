import { Schema } from "mongoose";
import mongoose from "mongoose";

const SignUpSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

const User = mongoose.model("User", SignUpSchema);

export default User;
