import { Router } from "express";

const getMoviesHandler = (req, res) => {
  res.send({ message: "Movies handled" });
};

const logger = (req, res, next) => {
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
