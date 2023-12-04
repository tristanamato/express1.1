const request = require("supertest");
const app = require("../app");

describe("Get /movies", () => {

  test("should return list of all movies", async () => {
    const response = await request (app).get("/movies");
    expect(response.status).toBe(200);
    expect(response.body.length).not.toBe(0);
    });

});

describe("Get /movies/:id", () => {

  test("should return movies by ID", async () => {
    const response = await request (app).get("/movies/1");
    expect(response.status).toBe(200);
    expect(response.headers['Content-Type']).toMatch(/json/);
    expect(response.body).toHaveProperty("title");
  });

  test("should return empty dad 404 ", async () => {
    const response = await request (app).get("/movies/0");
    expect(response.status).toBe(404);
    expect(response.headers['Content-Type']).toMatch(/json/);
  });
});

