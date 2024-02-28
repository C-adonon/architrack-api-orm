// This is the root rout for the API

import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const rootMessage = {
    definition: {
      message: "Welcome to Architrack API",
      info: {
        name: "Architrack API",
        version: "0.1",
        description:
          "This is the REST API for the Architrack app, providing access to essential functionalities for managing enterprise's appplication portfolio.",
        documentation: "https://architrack-api.com/docs",
        status: "Development",
        author: "Architrack Team - Chloé ADONON",
      },
      endpoints: [
        "/users",
        "/applications",
        "/application-types",
        "/departments",
        "/business-capabilties",
        "/providers",
        "/languages",
        "/softwares",
      ],
    },
  };
  res.json(rootMessage);
});

export default router;
