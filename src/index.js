import { unmock } from "unmock-node";
import buildApp from "./app";

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

(async () => {
  await unmock();
  const app = await buildApp();
  app.listen(port);
})();
