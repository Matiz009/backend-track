import express from "express";
import {
  newTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();
router.post("/tasks/new", isAuthenticated, newTask);
router.get("/tasks/my", isAuthenticated, getTasks);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);
export default router;
