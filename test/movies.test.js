import express from "express";
import { unmock } from "unmock-node";
import MoviesRoute from "../src/movies";
import request from "supertest";

const app = express();
const route = MoviesRoute();
app.use("/movies", route);

describe("Movies route", () => {
  beforeAll(async () => {
    await unmock({ token: process.env.UNMOCK_TOKEN });
  });
  it("returns movie reviews", async () => {
    const response = await request(app)
      .get("/movies")
      .expect(200);
    expect(response.body.movies).toBeDefined();
  });
});
