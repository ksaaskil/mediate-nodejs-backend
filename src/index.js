import buildApp from "./app";

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

const app = buildApp();
app.listen(port);
