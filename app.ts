import express, {Express} from "express";
import healthRoute from './src/health/router.health'
import resumeRoute from './src/resume/router'
import * as mongoose from "mongoose";
import Logger from "./src/utils/logger";
import * as dotenv from 'dotenv'

const app: Express = express()

app.use(healthRoute);
app.use(resumeRoute)
app.use(express.json());

dotenv.config()

const port = process.env.PORT || 3000
const MONGODB = process.env.MONGODB || ''

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB);
    app.listen(port, () => Logger.info(`Server started on port ${port}`));
  } catch (error) {
    Logger.error(`Error: ${error}`)
    process.exit(1);
  }
};

export default startServer
