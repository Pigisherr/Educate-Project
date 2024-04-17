import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import mongoDBURL from "./config.js";
import User from "./modules.js"; // Import the default export without curly braces

const app = express();
const PORT = 5174;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("focus");
});

app.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password }); // Use an object to create a new user
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error with user registration:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      console.log("User signed in successfully!");
      // Send a success response with status code 200
      res.status(200).json({ message: "Login successful" });
    } else {
      // If user does not exist or password is incorrect, send an error response
      res.status(401).json({ error: "Incorrect email or password" });
      console.log("Password and email do not match");
    }
  } catch (err) {
    console.error("Error with user login:", err);
    // Handle other errors, e.g., database connection error
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/chat", (req, res) => {
  console.log("chat revceived!");
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
