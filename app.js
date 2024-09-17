// import dependencies
import express from "express";
import cors from "cors";
import createHttpError from "http-errors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
// import middleware
import { prismaErrorHandler } from "./middlewares/prismaMiddleware.js";

// import routes
import root from "./routes/indexRoutes.js";
import softwares from "./routes/softwaresRoutes.js";
import languages from "./routes/languagesRoutes.js";
import providers from "./routes/providersRoutes.js";
import applicationTypes from "./routes/applicationTypesRoutes.js";
import departments from "./routes/departmentsRoutes.js";
import businessCapabilties from "./routes/businessCapabiltiesRoutes.js";
import applications from "./routes/applicationsRoutes.js";
import users from "./routes/usersRoutes.js";
import chartData from "./routes/chartDataRoutes.js";
import auth from "./routes/authRoutes.js";

// initialize app
export const app = express();

// CORS
app.use(
  cors({
    origin: [
      "https://architrack-api-7inqv.ondigitalocean.app/",
      "https://architrack-api-7inqv.ondigitalocean.app",
      "http://localhost:3000/",
      "http://localhost:3000",
      "http://localhost:8080/",
      "http://localhost:8080",
      "http://localhost:5173/",
      "http://localhost:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  })
);

app.use(helmet());

app.use(cookieParser());

// for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", root);
app.use("/softwares", softwares);
app.use("/languages", languages);
app.use("/providers", providers);
app.use("/applicationtypes", applicationTypes);
app.use("/departments", departments);
app.use("/businesscapabilities", businessCapabilties);
app.use("/applications", applications);
app.use("/users", users);
app.use("/chartdata", chartData);
app.use("/auth", auth);

// Prisma error handler
app.use(prismaErrorHandler);

// Define a custom error-handling middleware
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.message);

  // Auth errors
  if (err.name === "UnauthorizedError") {
    // if (!err.message) {
    //   return res
    //     .status(401)
    //     .json({ error: "You do not have access to this page" });
    // } else {
    //   return res.status(401).json({ error: err.message });
    // }
    if (err.message ? err.message : "You do not have access to this page")
      return res.status(401).json({ error: err.message });
  } else if (
    err.name === "ErrorDocument"
    // err.name === "NotFoundError"
    //  || err.status === 404
  ) {
    return res.status(404).json({ error: "Page not found" });
  } else if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  } else if (err.status == undefined || err.status == 500) {
    return res
      .status(500)
      .json({ error: "Internal server error", err: err.message });
  } else {
    return res.status(err.status).json({ error: err.message });
  }
});
