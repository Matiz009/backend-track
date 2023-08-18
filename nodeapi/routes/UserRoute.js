import express from "express";
import {
  createUser,
  getUsersById,
  getallUsers,
  special,
} from "../controllers/users.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/users/all", getallUsers);
router.get("/userid/special", special);
router.get("/userid/:id", getUsersById);
router.post("/users/new", createUser);

export default router;
