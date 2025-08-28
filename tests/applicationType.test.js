import { it, describe, expect, expectTypeOf } from "vitest";
import request from "supertest";
import { app } from "../app.js";

let inc = 7;
inc++;
console.log("inc :", inc);

/*
 * GET ALL APPLICATION TYPES
 */

describe("GET /applicationtypes", () => {
  it("returns all application types", async () => {
    const response = await request(app)
      .get("/applicationtypes")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET APPLICATION TYPE BY ID
 */

describe("GET /applicationtypes/:id", () => {
  it("returns the corresponding application type based on its ID", async () => {
    const response = await request(app)
      .get("/applicationtypes/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if application type does not exist", async () => {
    const response = await request(app)
      .get("/applicationtypes/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "ApplicationType not found" });
  });
  it("returns a 404 if application type does not exist", async () => {
    const response = await request(app)
      .get("/applicationtypes/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE APPLICATION TYPE
 */

describe("POST /applicationtypes", () => {
  it("creates a new application type", async () => {
    const response = await request(app)
      .post("/applicationtypes")
      .send({
        name: "test" + Math.floor(Math.random() * 100),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  it("returns a 400 if application type already exists", async () => {
    const response = await request(app)
      .post("/applicationtypes")
      .send({
        name: "Web Application",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "ApplicationType already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const response = await request(app)
      .post("/applicationtypes")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE APPLICATION TYPE
 */

describe("PUT /applicationtypes/:id", () => {
  it("updates an existing application type", async () => {
    const response = await request(app)
      .put("/applicationtypes/2")
      .send({
        name: "test update application type" + inc,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if application type does not exist", async () => {
    const response = await request(app)
      .put("/applicationtypes/12345")
      .send({
        name: "test update application type",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "ApplicationType not found" });
  });
  it("returns a 404 if application type does not exist", async () => {
    const response = await request(app)
      .put("/applicationtypes/abcd")
      .send({
        name: "test update application type",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const response = await request(app)
      .put("/applicationtypes/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE APPLICATION TYPE
 */

describe("DELETE /applicationtypes/:id", () => {
  it("deletes the corresponding application type based on its ID", async () => {
    const response = await request(app)
      .delete("/applicationtypes/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if application type does not exist", async () => {
    const response = await request(app)
      .delete("/applicationtypes/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 404 if application type does not exist", async () => {
    const response = await request(app)
      .delete("/applicationtypes/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
