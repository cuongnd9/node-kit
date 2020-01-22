import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';

function handleError(
  err: any,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (err.statusCode) {
    // Error for Celebrate(Joi validation).
    return res.status(err.statusCode).json(err);
  }
  if (err.isBoom) {
    // Error for Boom.
    const { statusCode, payload } = err.output;
    return res.status(statusCode).json(payload);
  }
  if (err.result && err.result.errors) {
    // Error for Prisma
    const prismaError = {
      statusCode: 500,
      err: 'An internal server error occurred',
      message: 'Prisma Error',
      errors: err.result.errors
    };
    return res.status(500).json(prismaError);
  }
  // Default error.
  const defaultError = Boom.badImplementation(
    'An internal server error occurred'
  );
  const { statusCode, payload } = defaultError.output;
  res.status(statusCode).json({
    ...payload,
    errors: err.message
  });
  next();
}

export default handleError;
