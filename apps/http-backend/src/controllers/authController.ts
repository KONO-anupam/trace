import { Request, Response } from "express";
import {
  signupService,
  signinService,
} from "../services/authService";
import { CreateUserSchema } from "@repo/common/types"

export const signup = async (req: Request, res: Response) => {
  const data = CreateUserSchema.safeParse(req.body)
  if(!data.success){
    return res.json({
      message: "Incorrect inputs"
    })
  }
  try {
    const { email, password } = req.body;

    const { token } = await signupService(email, password);

    res.status(201).json({ token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { token } = await signinService(email, password);

    res.status(200).json({ token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
