import {Response, Request, NextFunction} from "express";
import { findByEmail } from "./repository"
import Logger from "../utils/logger";
import asyncHandler from "../utils/asyncHandler";
import response from "../utils/response";
import ClientError from "../utils/errors";

const getResumeByEmail =  async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
  const {email} = req.params
  Logger.info(`GetResumeByEmail:::Searching this email: ${email}`)
  const resume = await findByEmail(email)

  if (!resume) {
    Logger.error(`GetResumeByEmail:::EmailNotFound: Resume not found for email: ${email}`)
    throw new ClientError("Email not found")
  }

  Logger.info(`GetResumeByEmail:::EmailFound: Resume successfully found for email: ${email}`)
  return response(res, 200, resume)
}

export default {
  getResumeByEmail: asyncHandler(getResumeByEmail),
}
