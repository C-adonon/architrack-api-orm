import express from "express";
import {
  getAllApplicationTypes,
  getApplicationTypeById,
  createApplicationType,
  updateApplicationType,
  deleteApplicationType,
} from "../controllers/applicationTypeController.js";
import {
  createApplicationTypeValidator,
  updatedApplicationTypeValidator,
} from "../validators/applicationTypeValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllApplicationTypes);
router.get("/:id([0-9]+)", authenticateToken, getApplicationTypeById);
router.post(
  "/",
  authenticateToken,
  validateData(createApplicationTypeValidator),
  createApplicationType
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(updatedApplicationTypeValidator),
  updateApplicationType
);
router.delete("/:id([0-9]+)", authenticateToken, deleteApplicationType);

export default router;
