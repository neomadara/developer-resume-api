import express from "express";
import getResumeByEmail from './controller'
import validateSchema from "../utils/validateSchema";
import EmailAdapter from "./adapters/email.adapter";

const router = express.Router()

router.get(
  "/resume/:email",
  validateSchema(EmailAdapter),
  getResumeByEmail
)

export default router
