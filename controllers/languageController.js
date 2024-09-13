import createHttpError from "http-errors";
import Language from "../models/Language.js";
import e from "express";

const language = new Language();

export const getAllLanguages = async (req, res, next) => {
  try {
    const languages = await language.getAllLanguages();
    if (!languages) next(createHttpError(404, "No language found"));
    res.status(200).json(languages);
  } catch (error) {
    next(error);
  }
};

export const getLanguageById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const languageById = await language.getLanguageById(id);
    if (!languageById) next(createHttpError(404, "Language not found"));
    else res.status(200).json(languageById);
  } catch (error) {
    next(error);
  }
};

export const createLanguage = async (req, res, next) => {
  try {
    const data = req.body;
    const newLanguage = await language.createLanguage(data);
    res.status(201).json(newLanguage);
  } catch (error) {
    next(error);
  }
};

export const updateLanguage = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    if (Object.keys(data).length === 0)
      next(createHttpError(400, "Invalid data"));
    const updatedLanguage = await language.updateLanguage(id, data);
    res.status(200).json(updatedLanguage);
  } catch (error) {
    next(error);
  }
};

export const deleteLanguage = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const deletedLanguage = await language.deleteLanguage(id);
    res.status(200).json(deletedLanguage);
  } catch (error) {
    next(error);
  }
};
