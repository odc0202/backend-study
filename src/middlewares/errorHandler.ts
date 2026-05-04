import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { Prisma } from "../generated/prisma/index.js";
import { HTTP_STATUS, PRISMA_ERROR } from "../constants/index.js";

export const errorHandler: ErrorRequestHandler = (
  err,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof Error) {
    console.error(err.stack);
  } else {
    console.error(err);
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === PRISMA_ERROR.UNIQUE_CONSTRAINT) {
      const field = (err.meta?.target as string[])?.[0];
      return res.status(HTTP_STATUS.CONFLICT).json({
        success: false,
        message: `${field}가 이미 사용 중입니다.`,
      });
    }

    if (err.code === PRISMA_ERROR.RECORD_NOT_FOUND) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: "요청한 리소스를 찾을 수 없습니다.",
      });
    }
  }

  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "서버 내부 오류가 발생했습니다.",
  });
};
