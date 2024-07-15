import { Response } from 'express';

const response = (res: Response, statusCode: number, data: any) => {
  return res.status(statusCode).json(data);
}

export default response;
