import createHttpError from "http-errors";
import Department from "../models/Department.js";

const department = new Department();

export const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await department.getAllDepartments();
    if (!departments) next(createHttpError(404, "No department found"));
    res.status(200).json(departments);
  } catch (error) {
    next(error);
  }
};

export const getDepartmentById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const departmentById = await department.getDepartmentById(id);
    if (!departmentById) next(createHttpError(404, "Department not found"));
    else res.status(200).json(departmentById);
  } catch (error) {
    next(error);
  }
};

export const createDepartment = async (req, res, next) => {
  try {
    const data = req.body;
    const newDepartment = await department.createDepartment(data);
    res.status(201).json(newDepartment);
  } catch (error) {
    next(error);
  }
};

export const updateDepartment = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedDepartment = await department.updateDepartment(id, data);
    res.status(200).json(updatedDepartment);
  } catch (error) {
    next(error);
  }
};

export const deleteDepartment = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedDepartment = await department.deleteDepartment(id);
    res.status(200).json(deletedDepartment);
  } catch (error) {
    next(error);
  }
};
