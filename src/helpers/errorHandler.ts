import Boom from '@hapi/boom';
import { Request, Response, NextFunction } from 'express';

export default function handleError(err: any, req: Request, res: Response, next: NextFunction) {
  const defaultError = Boom.badImplementation('An internal server error occurred');
  const { statusCode, payload } = defaultError.output;
  res.status(statusCode).json({
    ...payload,
    errors: err.message,
  });
  next();
}
