import express, {Express, Request, Response} from "express";
import Logger from "./src/utils/logger";

const app: Express = express()

app.get('/healthz', (req: Request, res: Response) => {
  Logger.info('health check service')
  const healthCheck = {
    uptime: process.uptime(),
    message: 'Ok',
    timestamp: Date.now()
  }
  res.send(healthCheck).status(200)
})

export default app
