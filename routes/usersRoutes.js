import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllRoles,
  getUserByUuid,
} from "../controllers/userController.js";
import { updatedUserValidator } from "../validators/userValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();
let uuidRegex =
  "([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})";
let idRegex = "([0-9]+)";

router.get("/", authenticateToken, getAllUsers);
router.get("/:id" + idRegex, authenticateToken, getUserById);
router.get("/:uuid" + uuidRegex, authenticateToken, getUserByUuid);
router.get("/me", authenticateToken, getUserByUuid);
router.put(
  "/:uuid" + uuidRegex,
  authenticateToken,
  validateData(updatedUserValidator),
  updateUser
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(updatedUserValidator),
  updateUser
);
router.delete("/:uuid" + uuidRegex, authenticateToken, deleteUser);
router.get("/roles", getAllRoles);

export default router;
