import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllRoles,
} from "../controllers/userController.js";
import {
  createUserValidator,
  updatedUserValidator,
} from "../validators/userValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id([0-9]+)", getUserById);
router.post("/", validateData(createUserValidator), createUser);
router.put(
  "/:id([0-9]+)",
  validateData(updatedUserValidator),
  updateUser
);
router.delete("/:id([0-9]+)", deleteUser);
router.get("/roles", getAllRoles);

export default router;
