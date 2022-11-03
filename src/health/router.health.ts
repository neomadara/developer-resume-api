import express, {Request, Response} from "express";
import Logger from "../utils/logger";

const router = express.Router()

router.get('/healthz', (_req: Request, res: Response) => {
  Logger.info('health check service')
  const healthCheck = {
    uptime: process.uptime(),
    message: 'Ok',
    timestamp: Date.now()
  }
  res.send(healthCheck).status(200)
})

export default router
