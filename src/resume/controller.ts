import {Response, Request, NextFunction} from "express";

const getResumeByEmail =  async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
  try {
    return res.status(200).json({})
  } catch (error) {
    return res.status(500).json({})
  }
}

export default getResumeByEmail
