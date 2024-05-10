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

const router = express.Router();

router.get("/", getAllDepartments);
router.get("/:id([0-9]+)", getDepartmentById);
router.post("/", validateData(departmentValidator), createDepartment);
router.put("/:id([0-9]+)", validateData(departmentValidator), updateDepartment);
router.delete("/:id([0-9]+)", deleteDepartment);

export default router;
