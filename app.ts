import express, {Express} from "express";
import healthRoute from './src/health/router.health'
import resumeRoute from './src/resume/router'
import * as mongoose from "mongoose";
import Logger from "./src/utils/logger";
import * as dotenv from 'dotenv'
import cors from "cors"

const app: Express = express()
const port = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || ''

dotenv.config()

app.use(express.json());
app.use(cors());
app.use(healthRoute);
app.use(resumeRoute)

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(port, () => Logger.info(`Server started on port ${port}`));
  } catch (error) {
    Logger.error(`Error: ${error}`)
    process.exit(1);
  }
};

export default startServer
