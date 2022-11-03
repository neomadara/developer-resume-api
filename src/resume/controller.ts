import {Response, Request, NextFunction} from "express";
import { findByEmail } from "./repository"

const getResumeByEmail =  async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
  try {
    const {email} = req.params
    const resumeResult = await findByEmail(email)
    return res.status(200).json(resumeResult)
  } catch (error) {
    return res.status(500).json({})
  }
}

export default getResumeByEmail
