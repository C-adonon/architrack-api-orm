import express from "express";
import {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
  getAllContractTypes,
  getAllCriticalities,
  getAllHostingTypes,
  getAllValidationStatuses,
  getAllStates,
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

router.get("/contracttypes", getAllContractTypes);
router.get("/states", getAllStates);
router.get("/criticalities", getAllCriticalities);
router.get("/hostingtypes", getAllHostingTypes);
router.get("/validationstatuses", getAllValidationStatuses);

export default router;
