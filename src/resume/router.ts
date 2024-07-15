import express from "express";
import validateSchema from "../utils/validateSchema";
import EmailAdapter from "./adapters/email.adapter";
import Controller from "./controller";

const router = express.Router()

router.get(
  "/resume/:email",
  validateSchema(EmailAdapter),
  Controller.getResumeByEmail
)

export default router
