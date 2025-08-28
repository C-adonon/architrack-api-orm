import { it, describe, expect, expectTypeOf } from "vitest";
import { createAuthenticatedAgent } from "./authHelper.js";

let inc = 10;
console.log("inc: " + inc);

/*
 * GET ALL PROVIDERS
 */

describe("GET /providers", () => {
  it("returns all providers", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/providers")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET PROVIDER BY ID
 */

describe("GET /providers/:id", () => {
  it("returns the corresponding provider based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/providers/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if provider does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/providers/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Provider not found" });
  });
  it("returns a 404 if provider does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/providers/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE PROVIDER
 */

describe("POST /providers", () => {
  it("creates a new provider", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/providers")
      .send({
        name: "test create provider " + Math.floor(Math.random() * 100),
        location: "test",
        description: "test",
        url: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  it("returns a 400 if provider already exists", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/providers")
      .send({
        name: "Goldner Group",
        location: "test",
        description: "test",
        url: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Provider already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/providers")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE PROVIDER
 */

describe("PUT /providers/:id", () => {
  it("updates the corresponding provider based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/providers/2")
      .send({
        name: "test update provider",
        location: "test",
        description: "test",
        url: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if provider does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/providers/12345")
      .send({
        name: "test update provider",
        location: "test",
        description: "test",
        url: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Provider not found" });
  });
  it("returns a 404 if provider does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/providers/abcd")
      .send({
        name: "test update provider",
        location: "test",
        description: "test",
        url: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/providers/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE PROVIDER
 */

describe("DELETE /providers/:id", () => {
  it("deletes the corresponding provider based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/providers/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if provider does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/providers/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 404 if provider does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/providers/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});

