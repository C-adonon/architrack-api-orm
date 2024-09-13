import createHttpError from "http-errors";
import BusinessCapability from "../models/BusinessCapability.js";

const businessCapability = new BusinessCapability();

export const getAllBusinessCapabilities = async (req, res, next) => {
  try {
    const businessCapabilities =
      await businessCapability.getAllBusinessCapabilities();
    if (!businessCapabilities)
      next(createHttpError(404, "No businessCapability found"));
    res.status(200).json(businessCapabilities);
  } catch (error) {
    next(error);
  }
};

export const getBusinessCapabilityById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const businessCapabilityById =
      await businessCapability.getBusinessCapabilityById(id);
    if (!businessCapabilityById)
      next(createHttpError(404, "BusinessCapability not found"));
    else res.status(200).json(businessCapabilityById);
  } catch (error) {
    next(error);
  }
};

export const createBusinessCapability = async (req, res, next) => {
  try {
    const data = req.body;
    const newBusinessCapability =
      await businessCapability.createBusinessCapability(data);
    res.status(201).json(newBusinessCapability);
  } catch (error) {
    next(error);
  }
};

export const updateBusinessCapability = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedBusinessCapability =
      await businessCapability.updateBusinessCapability(id, data);
    res.status(200).json(updatedBusinessCapability);
  } catch (error) {
    next(error);
  }
};

export const deleteBusinessCapability = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedBusinessCapability =
      await businessCapability.deleteBusinessCapability(id);
    res.status(200).json(deletedBusinessCapability);
  } catch (error) {
    next(error);
  }
};
