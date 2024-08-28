import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import {
  generateTokens,
  generateAccessToken,
  sendTokens,
  sendAccessToken,
} from "../auth/jwtMiddleware.js";
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";
const user = new User();

export const login = async (req, res, next) => {
  const credentials = req.body;
  try {
    let currentUser = await user.getUserByEmail(credentials);
    if (!currentUser) {
      next(createHttpError(404, "User not found"));
    } else {
      let tokens = generateTokens(currentUser);
      sendTokens(res, tokens);
      res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await user.createUser(data);
    // TODO TEST THIS
    if (!newUser) next(createHttpError(400, "Invalid data"));
    let tokens = generateTokens(newUser);
    sendTokens(res, tokens);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res.status(401).json({ error: "No token provided" });

  try {
    let payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    let currentUser = { id: payload.id, email: payload.email };
    const accessToken = generateAccessToken(currentUser);
    sendAccessToken(res, accessToken);
    res.json({ message: "Token refreshed" });
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

