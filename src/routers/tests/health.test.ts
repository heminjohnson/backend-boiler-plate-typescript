import app from "../../server";
import supertest from "supertest";

const request = supertest(app);

const token = 'dummyToken'

describe("routers", () => {
  describe("health", () => {
    test("it should test the endpoint GET /health", async (done) => {
      const response = await request
        .get("/health")
        .set({ "Authorization": token });

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ message: "Health OK" });

      done();
    });
  });
});
