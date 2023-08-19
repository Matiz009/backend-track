import TaskModel from "../models/task.js";

const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    const task = await TaskModel.create({
      title,
      description,
      user: req.user, // Assuming req.user contains user information
    });

    res.status(201).json({
      success: true,
      message: "Task added successfully.",
      data: task, // Optionally, you can send the created task data in the response
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the task.",
      error: error.message, // Optionally, you can include the error message in the response
    });
  }
};

const getTasks = async (req, res, next) => {
  const userId = req.user._id;
  const tasks = await TaskModel.find({ user: userId });
  res.status(200).json({
    success: true,
    tasks,
  });
};

const updateTask = async (req, res, next) => {
  const id = req.params.id;
  const task = await TaskModel.findById(id);
  task.isCompleted = !task.isCompleted;
  await task.save();
  res.status(200).json({
    success: true,
    message: "Task Updated",
  });
};
const deleteTask = async (req, res, next) => {
  const task = await TaskModel.findById(req.params.id);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task Deleted",
  });
};
export { newTask, getTasks, updateTask, deleteTask };
