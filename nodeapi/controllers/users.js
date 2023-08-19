import userModel from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import { setCookie } from "../utils/features.js";
import ErrorHandler from "../middleware/error.js";
const getallUsers = async (req, res, next) => {
  try {
    const usersData = await userModel.find({});
    res.json({
      success: true,
      users: usersData,
    });
  } catch (error) {
    next(error);
  }
};

const special = (req, res) => {
  res.json({
    success: true,
    message: "Just Checking",
  });
};
const getUserByToken = (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ErrorHandler("Not Found", 404));
    }
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
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
    next(error);
  }
};

const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(0),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
      }) // Set the expiration date to a past date
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
    return next(new ErrorHandler("Not Found", 404));
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ErrorHandler("Not Found", 404));
  }
  setCookie(user, res, `Welcome Back, ${user.name}`, 200);
};

export { login, logout, getallUsers, getUserByToken, special, createUser };
