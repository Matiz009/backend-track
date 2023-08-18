import userModel from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import { setCookie } from "../utils/features.js";
const getallUsers = async (req, res) => {
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
};

const special = (req, res) => {
  res.json({
    success: true,
    message: "Just Checking",
  });
};
const getUserByToken = (req, res) => {
  try {
    if (!req.user) {
      res.status(404).json({
        success: false,
        error: "Error fetching user data.",
      });
    }
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      error: "Error fetching user data.",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    setCookie(user, res, "User created successfully", 201);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      error: "Error while creating user.",
    });
  }
};

const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", { expires: new Date(0) }) // Set the expiration date to a past date
      .json({
        success: true,
        user: req.user,
      });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }
  setCookie(user, res, `Welcome Back, ${user.name}`, 200);
};

export { login, logout, getallUsers, getUserByToken, special, createUser };
