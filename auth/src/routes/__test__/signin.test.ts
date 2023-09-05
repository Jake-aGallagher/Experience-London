import request from "supertest";
import { app } from "../../app";

it("fails when email supplied does not exist", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({ email: "test@example.com", password: "password" })
    .expect(400);
});

it("fails on incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({ email: "test@example.com", password: "passwordwrong" })
    .expect(400);
});

it("sets cookie on successful login", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({ email: "test@example.com", password: "password" })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
