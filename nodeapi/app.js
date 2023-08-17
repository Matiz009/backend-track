import express from "express";
import mongoose from "mongoose";
import userModel from "./models/UserSchema.js";

const app = express();
const PORT = 4000;

mongoose
  .connect("mongodb://127.0.0.1:27017/backendAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db."))
  .catch((e) => console.log("Error:", e));

//using middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users/all", async (req, res) => {
  try {
    const usersData = await userModel.find({});
    res.json({
      success: true,
      users: usersData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching users data.",
    });
  }
});
app.get("/userid/special", (req, res) => {
  res.json({
    success: true,
    message: "Just Checking",
  });
});

app.get("/userid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await userModel.findById(id);
    res.json({
      success: true,
      users: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching users data.",
    });
  }
});

app.post("/users/new", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.create({
      name,
      email,
      password,
    });
    user.save();
    res.status(201).cookie("temp", "hello").json({
      success: true,
      message: "Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error while creating users.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
