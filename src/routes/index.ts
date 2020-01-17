import express, { Request, Response } from 'express';
import imageRoute from './image.route';

const router = express.Router();

router.use('/image', imageRoute);

export default router;
