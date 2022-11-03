import express, {Express} from "express";
import healthRoute from './src/health/router.health'
import resumeRoute from './src/resume/router'
import * as mongoose from "mongoose";
import Logger from "./src/utils/logger";

const app: Express = express()

app.use(healthRoute);
app.use(resumeRoute)

app.use(express.json());

const port = process.env.PORT || 3000

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://resumeuser:ixjJ99FpUWe7Ux9n@cluster0.vjg0l.mongodb.net/production?retryWrites=true&w=majority"
    );
    app.listen(port, () => Logger.info(`Server started on port ${port}`));
  } catch (error) {
    Logger.error(`Error: ${error}`)
    process.exit(1);
  }
};

export default startServer
