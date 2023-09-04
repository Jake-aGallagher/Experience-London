import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import jwt from "jsonwebtoken";
import { Password } from "../services/password";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password must be provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (!existing) {
      throw new BadRequestError("Invalid Email or Password");
    }

    const passwordsMatch = await Password.compare(existing.password, password);
    if (!passwordsMatch) {
      throw new BadRequestError("Invalid Email or Password");
    }

    const userJwt = jwt.sign(
      {
        id: existing.id,
        email: existing.email,
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existing);
  }
);

export { router as signinRouter };
