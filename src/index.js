import MoviesRoute from "./movies";
const express = require("express");

const logger = (req, _, next) => {
  console.log("%s %s %s", req.method, req.url, req.path);
  next();
};

function buildApp() {
  const app = express();
  app.use(logger);
  app.use("/movies", MoviesRoute());
  return app;
}

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

const app = buildApp();
app.listen(port);
