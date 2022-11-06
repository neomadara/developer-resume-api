import {Response, Request, NextFunction} from "express";
import { findByEmail } from "./repository"
import Logger from "../utils/logger";

const getResumeByEmail =  async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
  try {
    const {email} = req.params
    const resume = await findByEmail(email)
    Logger.info(`Resume found ${resume}`)
    return res.status(200).json(resume)
  } catch (error) {
    Logger.error(`Resume error ${error}`)
    return res.status(500).json(error)
  }
}

export default getResumeByEmail
