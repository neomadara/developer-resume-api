import express, { Express, Request, Response } from "express";
import Logger from './utils/logger'

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  Logger.info('root path service')
  res.send('express + typescript')
})

app.listen(port, () => {
  Logger.info('express its a live!')
})
