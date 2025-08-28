import { it, describe, expect, expectTypeOf } from "vitest";
import request from "supertest";
import { app } from "../app.js";

// TODO: add token when auth is implemented

let inc = 10;
console.log("inc: " + inc);

/*
 * GET ALL PROVIDERS
 */

describe("GET /providers", () => {
  it("returns all providers", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .get("/providers/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if provider does not exist", async () => {
    const response = await request(app)
      .get("/providers/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Provider not found" });
  });
  it("returns a 404 if provider does not exist", async () => {
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
      .delete("/providers/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if provider does not exist", async () => {
    const response = await request(app)
      .delete("/providers/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 404 if provider does not exist", async () => {
    const response = await request(app)
      .delete("/providers/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});

