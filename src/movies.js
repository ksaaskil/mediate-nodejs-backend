import { Router } from "express";

const getMoviesHandler = (_, res) => {
  res.send({ message: "Movies handled" });
};

const logger = (req, _, next) => {
  console.log("%s %s %s", req.method, req.url, req.path);
  next();
};

function MoviesRoute() {
  const router = Router();

  router.use(logger);

  router.get("/movies", getMoviesHandler);

  return router;
}

export default MoviesRoute;
