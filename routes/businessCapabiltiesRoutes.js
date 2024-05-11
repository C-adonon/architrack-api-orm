import express from "express";
import {
  getAllBusinessCapabilitys,
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

const router = express.Router();

router.get("/", getAllBusinessCapabilitys);
router.get("/:id([0-9]+)", getBusinessCapabilityById);
router.post("/", validateData(createBusinessCapabilityValidator), createBusinessCapability);
router.put(
  "/:id([0-9]+)",
  validateData(updatedBusinessCapabilityValidator),
  updateBusinessCapability
);
router.delete("/:id([0-9]+)", deleteBusinessCapability);

export default router;
