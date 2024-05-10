import createHttpError from "http-errors";
import ApplicationType from "../models/ApplicationType.js";

const applicationType = new ApplicationType();

export const getAllApplicationTypes = async (req, res, next) => {
  try {
    const applicationTypes = await applicationType.getAllApplicationTypes();
    if (!applicationTypes)
      next(createHttpError(404, "No applicationType found"));
    res.status(200).json(applicationTypes);
  } catch (error) {
    next(error);
  }
};

export const getApplicationTypeById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const applicationTypeById = await applicationType.getApplicationTypeById(id);
    if (!applicationTypeById) next(createHttpError(404, "ApplicationType not found"));
    else res.status(200).json(applicationTypeById);
  } catch (error) {
    next(error);
  }
};

export const createApplicationType = async (req, res, next) => {
  try {
    const data = req.body;
    const newApplicationType = await applicationType.createApplicationType(data);
    res.status(201).json(newApplicationType);
  } catch (error) {
    next(error);
  }
};

export const updateApplicationType = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedApplicationType = await applicationType.updateApplicationType(id, data);
    res.status(200).json(updatedApplicationType);
  } catch (error) {
    next(error);
  }
};

export const deleteApplicationType = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedApplicationType = await applicationType.deleteApplicationType(id);
    res.status(200).json(deletedApplicationType);
  } catch (error) {
    next(error);
  }
};
