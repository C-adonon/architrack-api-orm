import { it, describe, expect, expectTypeOf } from "vitest";
import { createAuthenticatedAgent } from "./authHelper.js";

let inc = 13;
inc++;
console.log("inc :", inc);

/*
 * GET ALL LANGUAGES
 */

describe("GET /languages", () => {
  it("returns all languages", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/languages")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET LANGUAGE BY ID
 */

describe("GET /languages/:id", () => {
  it("returns the corresponding language based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/languages/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if language does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/languages/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Language not found" });
  });
  it("returns a 404 if language does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/languages/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE LANGUAGE
 */

describe("POST /languages", () => {
  it("creates a new language", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/languages")
      .send({
        name: "test create language" + inc,
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });
  inc++;
  it("returns a 400 if language already exists", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/languages")
      .send({
        name: "Java",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Language already exists" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/languages")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * UPDATE LANGUAGE
 */

describe("PUT /languages/:id", () => {
  it("updates an existing language", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/languages/2")
      .send({
        name: "test update language " + Math.floor(Math.random() * 100),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if language does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/languages/12345")
      .send({
        name: "test update language 12345",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Language not found" });
  });
  it("returns a 404 if language does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/languages/abcd")
      .send({
        name: "test update language abcd",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
  it("returns a 400 if data is invalid", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/languages/2")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400);
  });
});

/*
 * DELETE LANGUAGE
 */

describe("DELETE /languages/:id", () => {
  it("deletes the corresponding language based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/languages/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if language does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/languages/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Language not found" });
  });
  it("returns a 404 if language does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/languages/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

