import { Request, Response } from 'express';
import { HTTP_STATUS } from '../constants/index.js';

export const notFound = (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: '요청한 경로를 찾을 수 없어요.',
  });
};