import createHttpError from "http-errors";
import ChartData from "../models/ChartData.js";

const chartData = new ChartData();

export const getChartData = async (req, res, next) => {
  try {
    const data = await chartData.getChartData();
    if (!data) next(createHttpError(404, "No data found"));
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
