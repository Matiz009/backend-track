import userModel from "../models/UserSchema.js";
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
const getUsersById = async (req, res) => {
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
};

const createUser = async (req, res) => {
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
};

export { getallUsers, getUsersById, special, createUser };
