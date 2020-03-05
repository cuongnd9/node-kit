import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { errors } from 'celebrate';
import { handleError } from 'nsdk';
import { NotFound } from '../components/errors';
import catRoute from './cat.route';

const router = express.Router();

// Body parser.
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// Enable cors.
router.use(cors());
// Logger.
router.use(logger('dev'));

// Routes
router.use('/cat', catRoute);
// 404 not found.
router.use((req, res, next) => {
  next(new NotFound('API not found'));
});

// Celebrate validation errors.
router.use(errors());

// Global errors.
router.use(handleError);

export default router;
