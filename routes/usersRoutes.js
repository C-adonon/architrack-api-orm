import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllRoles,
} from "../controllers/userController.js";
import { updatedUserValidator } from "../validators/userValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllUsers);
router.get("/:id([0-9]+)", authenticateToken, getUserById);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(updatedUserValidator),
  updateUser
);
router.delete("/:id([0-9]+)", authenticateToken, deleteUser);
router.get("/roles", authenticateToken, getAllRoles);

export default router;
