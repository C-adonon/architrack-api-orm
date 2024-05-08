import express from "express";
import {
  getAllSoftwares,
  getSoftwareById,
  createSoftware,
  updateSoftware,
  deleteSoftware,
} from "../controllers/softwareController.js";
import {
  createSoftwareValidator,
  updatedSoftwareValidator,
} from "../validators/softwareValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";

const router = express.Router();

router.get("/", getAllSoftwares);
router.get("/:id([0-9]+)", getSoftwareById);
router.post("/", validateData(createSoftwareValidator), createSoftware);
router.put(
  "/:id([0-9]+)",
  validateData(updatedSoftwareValidator),
  updateSoftware
);
router.delete("/:id([0-9]+)", deleteSoftware);

export default router;
