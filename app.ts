import express, {Express} from "express";
import healthRoute from './src/health/controller'

const app: Express = express()

app.use(healthRoute);

export default app
