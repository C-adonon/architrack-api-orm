import { it, describe, expect, expectTypeOf } from "vitest";
import request from "supertest";
import { app } from "../app.js";

// TODO: add token when auth is implemented

let inc = 15;
console.log("inc :", inc);

/*
 * GET ALL SOFTWARES
 */

describe("GET /softwares", () => {
  it("returns all softwares", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .get("/softwares/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
  it("returns a 404 if software does not exist", async () => {
    const response = await request(app)
      .get("/softwares/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Software not found" });
  });
  it("returns a 404 if software does not exist", async () => {
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
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
    const response = await request(app)
      .put("/softwares/3")
      .send({})
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, { error: "Invalid data" });
  });

  it("returns a 404 if software does not exist", async () => {
    const response = await request(app)
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
    const response = await request(app)
      .delete("/softwares/" + inc)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });

  it("returns a 404 if software does not exist", async () => {
    const response = await request(app)
      .delete("/softwares/12345")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, { error: "Software not found" });
  });
  it("returns a 404 if software does not exist", async () => {
    const response = await request(app)
      .delete("/softwares/abcd")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
