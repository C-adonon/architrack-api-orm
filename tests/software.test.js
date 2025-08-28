import { it, describe, expect, expectTypeOf } from "vitest";
import { createAuthenticatedAgent } from "./authHelper.js";

let inc = 15;
console.log("inc :", inc);

/*
 * GET ALL SOFTWARES
 */

describe("GET /softwares", () => {
  it("returns all softwares", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/softwares")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

/*
 * GET SOFTWARE BY ID
 */

describe("GET /softwares/:id", () => {
  it("returns the corresponding software based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/softwares/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if software does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/softwares/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Software not found" });
  });
  it("returns a 404 if software does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .get("/softwares/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Not found" });
  });
});

/*
 * CREATE SOFTWARE
 */

describe("POST /softwares", () => {
  let id = 20;
  it("creates a new software", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/softwares")
      .send({
        name: "test create software 20",
        version: "1.0",
        description: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
    id++;
  });

  it("returns a 400 if software already exists", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .post("/softwares")
      .send({
        name: "test",
        version: "1.0",
        description: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Software already exists" });
  });
});

/*
 * UPDATE SOFTWARE
 */

describe("PUT /softwares/:id", () => {
  it("updates the corresponding software based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/softwares/3")
      .send({
        name: "test",
        version: "1.0",
        description: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });

  it("returns a 400 if data is empty", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/softwares/3")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Invalid data" });
  });

  it("returns a 404 if software does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .put("/softwares/12345")
      .send({
        name: "test",
        version: "1.0",
        description: "test",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Software not found" });
  });
});

/*
 * DELETE SOFTWARE
 */

describe("DELETE /softwares/:id", () => {
  it("deletes the corresponding software based on its ID", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/softwares/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });

  it("returns a 404 if software does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/softwares/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Software not found" });
  });
  it("returns a 404 if software does not exist", async () => {
    const agent = await createAuthenticatedAgent();
    const response = await agent
      .delete("/softwares/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
