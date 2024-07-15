import express, {Express, NextFunction, Response, Request, ErrorRequestHandler} from "express";
import healthRoute from './src/health/router.health'
import resumeRoute from './src/resume/router'
import * as mongoose from "mongoose";
import Logger from "./src/utils/logger";
import * as dotenv from 'dotenv'
import cors from "cors"
import resError from "./src/utils/resError";

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || ''


app.use(express.json());
app.use(cors());
app.use(healthRoute);
app.use(resumeRoute)

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  resError(res, err.statusCode, err.message);
})

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    Logger.info('Connected to MongoDB:::Successfully');
  } catch (error) {
    Logger.error(`Connected to MongoDB:::Error ${error}`);
    process.exit(1);
  }
};

export const startServer = async () => {
  if (process.env.NODE_ENV !== 'test') {
    await connectToMongo();
  }

  app.listen(port, () => Logger.info(`Server started on port ${port}`));
};

export default app
