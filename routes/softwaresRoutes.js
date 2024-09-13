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
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllSoftwares);
router.get("/:id([0-9]+)", authenticateToken, getSoftwareById);
router.post(
  "/",
  authenticateToken,
  validateData(createSoftwareValidator),
  createSoftware
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(updatedSoftwareValidator),
  updateSoftware
);
router.delete("/:id([0-9]+)", authenticateToken, deleteSoftware);

export default router;
