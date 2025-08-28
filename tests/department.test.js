import { it, describe, expect, expectTypeOf } from "vitest";
import request from "supertest";
import { app } from "../app.js";

// TODO: add token when auth is implemented

let inc = 5;
console.log("inc :", inc);

/*
 * GET ALL LANGUAGES
 */

describe("GET /departments", () => {
  it("returns all departments", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .get("/departments/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if department does not exist", async () => {
    const response = await request(app)
      .get("/departments/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Department not found" });
  });
  it("returns a 404 if department does not exist", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .post("/departments")
      .send({
        name: "test create department" + inc,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  inc++;
  it("returns a 400 if department already exists", async () => {
    const response = await request(app)
      .post("/departments")
      .send({
        name: "Java",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Department already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .put("/departments/2")
      .send({
        name: "test update department " + Math.floor(Math.random() * 100),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if department does not exist", async () => {
    const response = await request(app)
      .put("/departments/12345")
      .send({
        name: "test update department 12345",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Department not found" });
  });
  it("returns a 404 if department does not exist", async () => {
    const response = await request(app)
      .put("/departments/abcd")
      .send({
        name: "test update department abcd",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .delete("/departments/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if department does not exist", async () => {
    const response = await request(app)
      .delete("/departments/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Department not found" });
  });
  it("returns a 404 if department does not exist", async () => {
    const response = await request(app)
      .delete("/departments/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

