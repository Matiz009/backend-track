import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  createUser,
  getUserByToken,
  getallUsers,
  special,
  login,
  logout,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/users/all", getallUsers);
router.get("/userid/special", special);
router.get("/me", isAuthenticated, getUserByToken);
router.post("/users/new", createUser);
router.post("/users/login", login);
router.get("/users/logout", logout);

export default router;
