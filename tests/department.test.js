import { it, describe, expect, expectTypeOf } from "vitest";
import { createAuthenticatedAgent } from "./authHelper.js";

let inc = 5;
console.log("inc :", inc);

/*
 * GET ALL LANGUAGES
 */

describe("GET /departments", () => {
  it("returns all departments", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/departments")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET LANGUAGE BY ID
 */

describe("GET /departments/:id", () => {
  it("returns the corresponding department based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/departments/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if department does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/departments/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Department not found" });
  });
  it("returns a 404 if department does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/departments/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE LANGUAGE
 */

describe("POST /departments", () => {
  it("creates a new department", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/departments")
      .send({
        name: "test create department" + inc,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  inc++;
  it("returns a 400 if department already exists", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/departments")
      .send({
        name: "Java",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Department already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/departments")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE LANGUAGE
 */

describe("PUT /departments/:id", () => {
  it("updates an existing department", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/departments/2")
      .send({
        name: "test update department " + Math.floor(Math.random() * 100),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if department does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/departments/12345")
      .send({
        name: "test update department 12345",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Department not found" });
  });
  it("returns a 404 if department does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/departments/abcd")
      .send({
        name: "test update department abcd",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/departments/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE LANGUAGE
 */

describe("DELETE /departments/:id", () => {
  it("deletes the corresponding department based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/departments/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if department does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/departments/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Department not found" });
  });
  it("returns a 404 if department does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/departments/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

