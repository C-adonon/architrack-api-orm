import express from "express";
import {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";
import {
  createApplicationValidator,
  updatedApplicationValidator,
} from "../validators/applicationValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";

const router = express.Router();

router.get("/", getAllApplications);
router.get("/:id([0-9]+)", getApplicationById);
router.post("/", validateData(createApplicationValidator), createApplication);
router.put(
  "/:id([0-9]+)",
  validateData(updatedApplicationValidator),
  updateApplication
);
router.delete("/:id([0-9]+)", deleteApplication);

export default router;
