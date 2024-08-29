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
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllProviders);
router.get("/:id([0-9]+)", authenticateToken, getProviderById);
router.post(
  "/",
  authenticateToken,
  validateData(createProviderValidator),
  createProvider
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(updatedProviderValidator),
  updateProvider
);
router.delete("/:id([0-9]+)", authenticateToken, deleteProvider);

export default router;
