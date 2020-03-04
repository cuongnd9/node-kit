import { Request, Response, NextFunction } from 'express';
import { AppError } from '../components/errors';

function handleError(
  err: AppError,
  _: Request,
  res: Response,
  next: NextFunction
) {
  const { statusCode, error, message } = err;
  res.status(statusCode || 500).json({
      statusCode: statusCode || 500,
      error,
      message
  });
  next();
}

export default handleError;
