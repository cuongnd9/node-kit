import { Request, Response, NextFunction } from 'express';

class AppController {
    action(name: string) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const data = await (this as any)[name](req, res, next);
                res.json(data);
            } catch (err) {
                next(err);
            }
        }
    }
}

export default AppController;
