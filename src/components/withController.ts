import { Request, Response, NextFunction } from 'express';

function withController(action: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await action(req, res, next);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
}

export default withController;
