import { it, describe, expect, expectTypeOf } from "vitest";
import { createAuthenticatedAgent } from "./authHelper.js";

let inc = 8;
console.log("inc :", inc);

/*
 * GET ALL BUSINESS CAPABILITIES
 */

describe("GET /users", () => {
  it("returns all users", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/users")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET BUSINESS CAPABILITIES BY ID
 */

describe("GET /users/:id", () => {
  it("returns the corresponding user based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/users/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if user does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/users/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "User not found" });
  });
  it("returns a 404 if user does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/users/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE BUSINESS CAPABILITIES
 */

describe("POST /users", () => {
  it("creates a new user", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/users")
      .send({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        firstname: z.string(),
        lastname: z.string(),
        role: z.string(),
        departmentId: z.number(),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  it("returns a 400 if user already exists", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/users")
      .send({
        name: "ok",
        departmentId: 2,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "User already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/users")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE BUSINESS CAPABILITIES
 */

describe("PUT /users/:id", () => {
  it("updates the name & departement of an existing user", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/users/2")
      .send({
        name: "test update user",
        department: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("updates the name of an existing user", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/users/4")
      .send({
        name:
          "test update user" + Math.floor(Math.random() * 10),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("updates the department of an existing user", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/users/3")
      .send({
        department: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if user does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/users/12345")
      .send({
        name: "test update user",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "User not found" });
  });
  it("returns a 404 if user does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/users/abcd")
      .send({
        name: "test update user",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/users/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE BUSINESS CAPABILITIES
 */

describe("DELETE /users/:id", () => {
  it("deletes the corresponding user based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/users/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if user does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/users/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 404 if user does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/users/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
