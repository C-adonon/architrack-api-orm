import createHttpError from "http-errors";
import Provider from "../models/Provider.js";

const provider = new Provider();

export const getAllProviders = async (req, res, next) => {
  try {
    const providers = await provider.getAllProviders();
    if (!providers) next(createHttpError(404, "No provider found"));
    res.status(200).json(providers);
  } catch (error) {
    next(error);
  }
};

export const getProviderById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const providerById = await provider.getProviderById(id);
    if (!providerById) next(createHttpError(404, "Provider not found"));
    else res.status(200).json(providerById);
  } catch (error) {
    next(error);
  }
};

export const createProvider = async (req, res, next) => {
  try {
    const data = req.body;
    const newProvider = await provider.createProvider(data);
    res.status(201).json(newProvider);
  } catch (error) {
    next(error);
  }
};

export const updateProvider = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedProvider = await provider.updateProvider(id, data);
    res.status(200).json(updatedProvider);
  } catch (error) {
    next(error);
  }
};

export const deleteProvider = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedProvider = await provider.deleteProvider(id);
    res.status(200).json(deletedProvider);
  } catch (error) {
    next(error);
  }
};
