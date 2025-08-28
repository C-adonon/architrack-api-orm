import { it, describe, expect, expectTypeOf } from "vitest";
import request from "supertest";
import { app } from "../app.js";

let inc = 18;
console.log("inc :", inc);

/*
 * GET ALL APPLICATIONS
 */

describe("GET /applications", () => {
  it("returns all business capabilities", async () => {
    const response = await request(app)
      .get("/applications")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET APPLICATION BY ID
 */

describe("GET /applications/:id", () => {
  it("returns the corresponding application based on its ID", async () => {
    const response = await request(app)
      .get("/applications/7")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if application does not exist", async () => {
    const response = await request(app)
      .get("/applications/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Application not found" });
  });
  it("returns a 404 if application does not exist", async () => {
    const response = await request(app)
      .get("/applications/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE APPLICATION
 */

describe("POST /applications", () => {
  it("creates a new application", async () => {
    const response = await request(app)
      .post("/applications")
      .send({
        name: "test" + Math.floor(Math.random() * 100),
        description: "test description",
        version: "4.1.0",
        contractType: "EXTERNAL",
        state: "DEPRECATED",
        criticality: "LOW",
        validationStatus: "REJECTED",
        hostingType: "ON_PREMISE",
        authorId: 8,
        businessCapabilityId: 1,
        providerId: 3,
        applicationTypeId: 5,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  it("returns a 400 if application already exists", async () => {
    const response = await request(app)
      .post("/applications")
      .send({
        name: "okok",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
  it("returns a 400 if data is invalid", async () => {
    const response = await request(app)
      .post("/applications")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE APPLICATION
 */

describe("PUT /applications/:id", () => {
  it("updates some parameters of an existing application", async () => {
    const response = await request(app)
      .put("/applications/2")
      .send({
        description: "Other test" + Math.floor(Math.random() * 100),
        state: "MAINTENANCE",
        criticality: "MEDIUM",
        validationStatus: "TO_BE_VALIDATED",
        applicationTypeId: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("updates an existing application", async () => {
    const response = await request(app)
      .put("/applications/4")
      .send({
        providerId: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("updates an existing application", async () => {
    const response = await request(app)
      .put("/applications/3")
      .send({
        validationStatus: "VALIDATED",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if application does not exist", async () => {
    const response = await request(app)
      .put("/applications/12345")
      .send({
        name: "test update application",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Application not found" });
  });
  it("returns a 404 if application does not exist", async () => {
    const response = await request(app)
      .put("/applications/abcd")
      .send({
        name: "test update application",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const response = await request(app)
      .put("/applications/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE APPLICATION
 */

describe("DELETE /applications/:id", () => {
  it("deletes the corresponding application based on its ID", async () => {
    const response = await request(app)
      .delete("/applications/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if application does not exist", async () => {
    const response = await request(app)
      .delete("/applications/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 404 if application does not exist", async () => {
    const response = await request(app)
      .delete("/applications/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
