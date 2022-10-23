import {AnyZodObject} from "zod";
import {Request, Response, NextFunction} from "express";

const validate =
  (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync({
          query: req.query,
        });
        return next();
      } catch (error: any) {
        console.log(error.message)
        return res.status(409).json(error);
      }
    };


export default validate
