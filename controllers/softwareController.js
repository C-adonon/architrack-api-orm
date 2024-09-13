import createHttpError from "http-errors";
import Software from "../models/Software.js";

const software = new Software();

export const getAllSoftwares = async (req, res, next) => {
  try {
    const softwares = await software.getAllSoftwares();
    if (!softwares) next(createHttpError(404, "No software found"));
    res.status(200).json(softwares);
  } catch (error) {
    next(error);
  }
};

export const getSoftwareById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const softwareById = await software.getSoftwareById(id);
    if (!softwareById) next(createHttpError(404, "Software not found"));
    else res.status(200).json(softwareById);
  } catch (error) {
    next(error);
  }
};

export const createSoftware = async (req, res, next) => {
  try {
    const data = req.body;
    const newSoftware = await software.createSoftware(data);
    res.status(201).json(newSoftware);
  } catch (error) {
    next(error);
  }
};

export const updateSoftware = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedSoftware = await software.updateSoftware(id, data);
    res.status(200).json(updatedSoftware);
  } catch (error) {
    next(error);
  }
};

export const deleteSoftware = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedSoftware = await software.deleteSoftware(id);
    res.status(200).json(deletedSoftware);
  } catch (error) {
    next(error);
  }
};
