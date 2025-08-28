import request from "supertest";
import { app } from "../app.js";

export const createAuthenticatedAgent = async () => {
  const agent = request.agent(app);

  await agent.post("/auth/login").send({
    email: "ok@corp.com",
    password: "ok",
  });

  console.log("Login status:", loginResponse.status);
  console.log("Login headers:", loginResponse.headers);
  console.log("Login body:", loginResponse.body);

  const cookies = loginResponse.headers["set-cookie"];
  console.log("Cookies received:", cookies);

  if (loginResponse.status !== 200) {
    throw new Error(`Login failed with status ${loginResponse.status}`);
  }
  return agent;
};
