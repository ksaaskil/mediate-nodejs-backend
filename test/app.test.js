import request from "supertest";
import buildApp from "../src/app";

const app = buildApp();

describe("Express app", () => {
  it("returns movie reviews", async () => {
    const response = await request(app)
      .get("/movies")
      .expect(200);
    expect(response.body.message).toBeDefined();
  });
});
