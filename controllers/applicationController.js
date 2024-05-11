import createHttpError from "http-errors";
import Application from "../models/Application.js";

const application = new Application();

export const getAllApplications = async (req, res, next) => {
  try {
    const applications = await application.getAllApplications();
    if (!applications) next(createHttpError(404, "No application found"));
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};

export const getApplicationById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const applicationById = await application.getApplicationById(id);
    if (!applicationById) next(createHttpError(404, "Application not found"));
    else res.status(200).json(applicationById);
  } catch (error) {
    next(error);
  }
};

export const createApplication = async (req, res, next) => {
  try {
    const data = req.body;
    const newApplication = await application.createApplication(data);
    res.status(201).json(newApplication);
  } catch (error) {
    next(error);
  }
};

export const updateApplication = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedApplication = await application.updateApplication(id, data);
    res.status(200).json(updatedApplication);
  } catch (error) {
    next(error);
  }
};

export const deleteApplication = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedApplication = await application.deleteApplication(id);
    res.status(200).json(deletedApplication);
  } catch (error) {
    next(error);
  }
};
