import express from "express";
import MoviesRoute from "../src/movies";
import request from "supertest";

const app = express();
const route = MoviesRoute();
app.use("/movies", route);

describe("Movies route", () => {
  it("returns movie reviews", async () => {
    const response = await request(app)
      .get("/movies")
      .expect(200);
    expect(response.body.movies).toBeDefined();
  });
});
