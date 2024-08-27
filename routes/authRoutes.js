import express from "express";
// import { createUser, getUserByEmail } from "../controllers/userController.js";
import {
  login,
  register,
  refreshToken,
  logout,
} from "../controllers/authController.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/userValidator.js";

const router = express.Router();

router.post("/login", validateData(loginValidator), login);
router.post("/register", validateData(registerValidator), register);
router.get("/logout", logout);
router.post("/refreshtoken", refreshToken);

export default router;
