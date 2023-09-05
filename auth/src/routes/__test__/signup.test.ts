import request from "supertest";
import { app } from "../../app";

it("returns 201 status on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(201);
});

it("returns 400 status on invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "" })
    .expect(400);
});

it("returns 400 status on invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "testexample.com", password: "password" })
    .expect(400);
});

it("returns 400 status on no email or password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "", password: "" })
    .expect(400);
});

it("returns 400 status on duplicate email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(201);
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(400);
});

it("returns sets a cookie on successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
