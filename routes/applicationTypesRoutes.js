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

const router = express.Router();

router.get("/", getAllApplicationTypes);
router.get("/:id([0-9]+)", getApplicationTypeById);
router.post("/", validateData(createApplicationTypeValidator), createApplicationType);
router.put(
  "/:id([0-9]+)",
  validateData(updatedApplicationTypeValidator),
  updateApplicationType
);
router.delete("/:id([0-9]+)", deleteApplicationType);

export default router;
