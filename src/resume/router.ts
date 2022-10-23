import express from "express";
import getResumeByEmail from './controller'
import validateSchema from "../utils/validateSchema";
import GetResumeByEmailAdapter from "./getResumeByEmail.adapter";

const router = express.Router()

router.get(
  "/resume/:email",
  validateSchema(GetResumeByEmailAdapter),
  getResumeByEmail
)

export default router
