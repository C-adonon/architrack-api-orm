import express from "express";
import {
    getChartData
} from "../controllers/chartDataController.js";

const router = express.Router();
router.get("/", getChartData);

export default router;
