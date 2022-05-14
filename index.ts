import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.json({ message: "hello world! from Vercel power by Typescript" })
}
