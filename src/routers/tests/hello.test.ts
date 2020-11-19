import app from '../../server'

import supertest from 'supertest'
const request = supertest(app);

describe("routers", () => {
  describe("hello.js", () => {
    test("it should test the endpoint GET /hello", async (done) => {
      const response = await request.get("/hello");

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ message: "hello world" });

      done();
    });

    test("it should test the endpoint GET /germany", async (done) => {
      const response = await request.get("/germany");

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ message: "hello germany" });

      done();
    });
  });
});
