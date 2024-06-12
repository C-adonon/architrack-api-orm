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
    if (Object.keys(data).length === 0) {
      next(createHttpError(400, "Invalid data"));
    } else {
      const updatedApplication = await application.updateApplication(id, data);
      res.status(200).json(updatedApplication);
    }
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

export const getAllContractTypes = async (req, res, next) => {
  try {
    const contractTypes = await application.getAllContractTypes();
    if (!contractTypes) next(createHttpError(404, "No contract types found"));
    res.status(200).json(contractTypes);
  } catch (error) {
    next(error);
  }
};

export const getAllStates = async (req, res, next) => {
  try {
    const states = await application.getAllStates();
    if (!states) next(createHttpError(404, "No states found"));
    res.status(200).json(states);
  } catch (error) {
    next(error);
  }
};

export const getAllHostingTypes = async (req, res, next) => {
  try {
    const hostingTypes = await application.getAllHostingTypes();
    if (!hostingTypes) next(createHttpError(404, "No hosting types found"));
    res.status(200).json(hostingTypes);
  } catch (error) {
    next(error);
  }
};

export const getAllCriticalities = async (req, res, next) => {
  try {
    const criticalities = await application.getAllCriticalities();
    if (!criticalities) next(createHttpError(404, "No criticalities found"));
    res.status(200).json(criticalities);
  } catch (error) {
    next(error);
  }
};

export const getAllValidationStatuses = async (req, res, next) => {
  try {
    const validationStatuses = await application.getAllValidationStatuses();
    if (!validationStatuses)
      next(createHttpError(404, "No validation status found"));
    res.status(200).json(validationStatuses);
  } catch (error) {
    next(error);
  }
};
