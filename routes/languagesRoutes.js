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

const router = express.Router();

router.get("/", getAllLanguages);
router.get("/:id([0-9]+)", getLanguageById);
router.post("/", validateData(languageValidator), createLanguage);
router.put("/:id([0-9]+)", validateData(languageValidator), updateLanguage);
router.delete("/:id([0-9]+)", deleteLanguage);

export default router;
