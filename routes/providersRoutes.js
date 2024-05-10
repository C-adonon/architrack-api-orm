import express from "express";
import {
  getAllProviders,
  getProviderById,
  createProvider,
  updateProvider,
  deleteProvider,
} from "../controllers/providerController.js";
import {
  createProviderValidator,
  updatedProviderValidator,
} from "../validators/providerValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";

const router = express.Router();

router.get("/", getAllProviders);
router.get("/:id([0-9]+)", getProviderById);
router.post("/", validateData(createProviderValidator), createProvider);
router.put(
  "/:id([0-9]+)",
  validateData(updatedProviderValidator),
  updateProvider
);
router.delete("/:id([0-9]+)", deleteProvider);

export default router;
