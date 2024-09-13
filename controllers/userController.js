import createHttpError from "http-errors";
import User from "../models/User.js";

const user = new User();

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await user.getAllUsers();
    if (!users) next(createHttpError(404, "No user found"));
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const userById = await user.getUserById(id);
    if (!userById) next(createHttpError(404, "User not found"));
    else res.status(200).json(userById);
  } catch (error) {
    next(error);
  }
};

export const getUserByUuid = async (req, res, next) => {
  const uuid = req.user.uuid || req.params.uuid;
  try {
    const userByUuid = await user.getUserByUuid(uuid);
    if (!userByUuid) next(createHttpError(404, "User not found"));
    else res.status(200).json(userByUuid);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const uuid = req.user.uuid || req.params.uuid || req.params.id;
  const data = req.body;
  try {
    if (Object.keys(data).length === 0) {
      next(createHttpError(400, "Invalid data"));
    } else {
      const updatedUser = await user.updateUser(uuid, data);
      res.status(200).json({ updatedUser });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  // const id = parseInt(req.params.id);
  const uuid = req.user.uuid;
  try {
    const deletedUser = await user.deleteUser(uuid);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};

export const getAllRoles = async (req, res, next) => {
  try {
    const roles = await user.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
};
