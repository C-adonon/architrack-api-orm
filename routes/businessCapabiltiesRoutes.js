import express from "express";
import {
  getAllBusinessCapabilities,
  getBusinessCapabilityById,
  createBusinessCapability,
  updateBusinessCapability,
  deleteBusinessCapability,
} from "../controllers/businessCapabilityController.js";
import {
  createBusinessCapabilityValidator,
  updatedBusinessCapabilityValidator,
} from "../validators/businessCapabilityValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllBusinessCapabilities);
router.get("/:id([0-9]+)", authenticateToken, getBusinessCapabilityById);
router.post(
  "/",
  authenticateToken,
  validateData(createBusinessCapabilityValidator),
  createBusinessCapability
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(updatedBusinessCapabilityValidator),
  updateBusinessCapability
);
router.delete("/:id([0-9]+)", authenticateToken, deleteBusinessCapability);

export default router;
