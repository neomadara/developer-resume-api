import express, {Express} from "express";
import healthRoute from './src/health/router.health'
import resumeRoute from './src/resume/router'

const app: Express = express()

app.use(healthRoute);
app.use(resumeRoute)

app.use(express.json());

export default app
