import jwt from "jsonwebtoken";
export const setCookie = async (user, res, message, status) => {
  const token = jwt.sign({ _id: user._id }, "hvvwhsqjnnbsh2hajqj82bd"); // Move this line here
  await user.save(); // Save the user
  res
    .status(status)
    .cookie("token", token, { httpOnly: true, maxAge: 30 * 60 * 1000 })
    .json({
      success: true,
      message: message,
    });
};
