import express from "express";
import {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/departmentController.js";
import { departmentValidator } from "../validators/departmentValidator.js";
import { validateData } from "../middlewares/zodMiddleware.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getAllDepartments);
router.get("/:id([0-9]+)", authenticateToken, getDepartmentById);
router.post(
  "/",
  authenticateToken,
  validateData(departmentValidator),
  createDepartment
);
router.put(
  "/:id([0-9]+)",
  authenticateToken,
  validateData(departmentValidator),
  updateDepartment
);
router.delete("/:id([0-9]+)", authenticateToken, deleteDepartment);

export default router;
