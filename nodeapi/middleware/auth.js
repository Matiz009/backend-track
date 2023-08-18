import userModel from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Login First",
      });
    }

    const decoded = jwt.verify(token, "hvvwhsqjnnbsh2hajqj82bd");
    req.user = await userModel.findById(decoded._id);
    next();
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      error: "Error fetching user data.",
    });
  }
};
