import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Unauthorized, Forbidden } from './errors';
import config from './config';

function checkRole(...allowed: string[]) {
  const isAllowed = (role: string) => allowed.indexOf(role) > -1;
  return (req: any, _: Response, next: NextFunction) => {
    const token =
      req.body.token || req.query.token || req.headers['access-token'];
    if (!token) {
      throw new Unauthorized('No token provided');
    }
    const { secretKey } = config.jwt;
    try {
      const decoded: any = jwt.verify(token, secretKey);
      if (decoded && isAllowed(decoded.role)) {
        req.user = decoded;
        next();
      } else {
        throw new Forbidden('Your role is not allowed');
      }
    } catch (err) {
      throw new Unauthorized('Invalid access token');
    }
  };
}

export default checkRole;
