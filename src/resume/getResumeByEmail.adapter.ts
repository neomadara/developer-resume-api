import { z } from "zod";

const GetResumeByEmailSchema = z.object({
  params: z.object({
    email: z.string({required_error: "Email is required",}).email("Not a valid email"),
  })
});

export default GetResumeByEmailSchema
