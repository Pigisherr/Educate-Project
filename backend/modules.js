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

const chatSchema = new Schema({
  chat: {
    type: String,
  },
});

const chatsSchema = new Schema({
  chats: {
    type: Array,
  },
});

const User = mongoose.model("User", SignUpSchema);
const Chat = mongoose.model("Chat", chatSchema);
const Chats = mongoose.model("Chats", chatsSchema);

export default { User, Chat, Chats };
