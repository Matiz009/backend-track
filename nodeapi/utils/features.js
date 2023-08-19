import jwt from "jsonwebtoken";
export const setCookie = async (user, res, message, status) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET); // Move this line here
  await user.save(); // Save the user
  res
    .status(status)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: message,
    });
};
