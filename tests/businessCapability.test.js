import { it, describe, expect, expectTypeOf } from "vitest";
import { createAuthenticatedAgent } from "./authHelper.js";

let inc = 8;
console.log("inc :", inc);

/*
 * GET ALL BUSINESS CAPABILITIES
 */

describe("GET /businesscapabilities", () => {
  it("returns all business capabilitys", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/businesscapabilities")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET BUSINESS CAPABILITIES BY ID
 */

describe("GET /businesscapabilities/:id", () => {
  it("returns the corresponding business capability based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/businesscapabilities/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if business capability does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/businesscapabilities/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "BusinessCapability not found" });
  });
  it("returns a 404 if business capability does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/businesscapabilities/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE BUSINESS CAPABILITIES
 */

describe("POST /businesscapabilities", () => {
  it("creates a new business capability", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/businesscapabilities")
      .send({
        name: "test" + Math.floor(Math.random() * 100),
        departmentId: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  it("returns a 400 if business capability already exists", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/businesscapabilities")
      .send({
        name: "ok",
        departmentId: 2,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "BusinessCapability already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/businesscapabilities")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE BUSINESS CAPABILITIES
 */

describe("PUT /businesscapabilities/:id", () => {
  it("updates the name & departement of an existing business capability", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/businesscapabilities/2")
      .send({
        name: "test update business capability",
        department: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("updates the name of an existing business capability", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/businesscapabilities/4")
      .send({
        name:
          "test update business capability" + Math.floor(Math.random() * 10),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("updates the department of an existing business capability", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/businesscapabilities/3")
      .send({
        department: Math.floor(Math.random() * 5),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if business capability does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/businesscapabilities/12345")
      .send({
        name: "test update business capability",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "BusinessCapability not found" });
  });
  it("returns a 404 if business capability does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/businesscapabilities/abcd")
      .send({
        name: "test update business capability",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/businesscapabilities/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE BUSINESS CAPABILITIES
 */

describe("DELETE /businesscapabilities/:id", () => {
  it("deletes the corresponding business capability based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/businesscapabilities/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if business capability does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/businesscapabilities/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
  it("returns a 404 if business capability does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/businesscapabilities/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
