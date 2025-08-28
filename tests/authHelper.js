import request from "supertest";
import { app } from "../app.js";

export const createAuthenticatedAgent = async () => {
  const agent = request.agent(app);

  await agent.post("/auth/login").send({
    email: "ok@corp.com",
    password:
      "$argon2id$v=19$m=65536,t=3,p=4$YOHHpnxhYjcJDO0MOxM3gQ$KM3hJVHxRfOnvIbVqlacS6Or+V8k6LlF2w8jpBVwaDM",
  });

  return agent;
};
