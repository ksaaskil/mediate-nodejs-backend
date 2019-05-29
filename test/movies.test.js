import express from "express";
import MoviesRoute from "../src/movies";

const app = express();
const route = MoviesRoute();
app.use("/movies", route);

describe("Movies route", () => {
  it("returns movie reviews", () => {});
});
