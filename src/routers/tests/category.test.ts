import supertest from "supertest";
import { Connection } from "typeorm";
import { tearDownDatabase } from "typeorm-seeding";

import app from "../../server";
import { createConnectionForTest } from "../../database/createConnectionForTest";

const request = supertest(app);

const token = "dummyToken";
let connection: Connection;

describe("routers", () => {
  beforeAll(async (done) => {
    connection = await createConnectionForTest();
    done();
  });

  afterAll(async (done) => {
    await connection?.close();
    await tearDownDatabase();
    done();
  });

  describe("categories", () => {
    test("it should test the endpoint GET /categories", async (done) => {
      const response = await request
        .get("/categories")
        .set({ Authorization: token });

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({
        data: [
          { id: 1, name: "Frameworks", description: "Frameworks" },
          { id: 2, name: "Data Management", description: "Data Management" },
          { id: 3, name: "Infrastructure", description: "Infrastructure" },
          { id: 4, name: "Languages", description: "Languages" },
        ],
      });

      done();
    });
  });
});
