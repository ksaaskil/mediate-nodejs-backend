import { Router } from "express";
import * as moviesApi from "./movies-api";

const getMoviesHandler = async (_, res, next) => {
  try {
    const movies = await moviesApi.getMovies();
    return res.send({ movies });
  } catch (err) {
    console.error("Failed fetching movies", err.stack);
    return next(err);
  }
};

function MoviesRoute() {
  const router = Router();

  router.get("/", getMoviesHandler);

  return router;
}

export default MoviesRoute;
