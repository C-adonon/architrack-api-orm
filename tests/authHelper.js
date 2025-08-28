import request from "supertest";
import { app } from "../app.js";

export const createAuthenticatedAgent = async () => {
  const agent = request.agent(app);

  await agent.post("/auth/login").send({
    email: "ok@corp.com",
    password: "ok",
  });

  return agent;
};
