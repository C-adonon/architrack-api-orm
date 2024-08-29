import express from "express";
import {
  getAllLanguages,
  getLanguageById,
  createLanguage,
  updateLanguage,
  deleteLanguage,
} from "../controllers/languageController.js";
import { languageValidator } from "../validators/languageValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllLanguages);
router.get("/:id([0-9]+)", authenticateToken, getLanguageById);
router.post(
  "/",
  authenticateToken,
  validateData(languageValidator),
  createLanguage
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(languageValidator),
  updateLanguage
);
router.delete("/:id([0-9]+)", authenticateToken, deleteLanguage);

export default router;
