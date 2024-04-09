// import dependencies
import express from "express";
import cors from "cors";
import root from "./routes/indexRoutes.js";

// initialize app
export const app = express();

// CORS
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

// for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// TODO: Add routes here
app.use("/", root);

// Error middleware
app.use((err, req, res, next) => {
  // Auth errors
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ msg: "You do not have access to this page" });
  }
  if (err.name === "ErrorDocument") {
    return res.status(404).json({ msg: "Page not found" });
  }
  // other errors to handle
  return res.status(err.status).json({ error: err.message });
});