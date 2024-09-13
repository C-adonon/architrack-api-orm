import express from "express";
import {
    getChartData
} from "../controllers/chartDataController.js";
import { authenticateToken } from "../auth/jwtMiddleware.js";

const router = express.Router();
router.get("/", authenticateToken, getChartData);

export default router;
