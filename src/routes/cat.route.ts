import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { checkRole, withController } from '../helpers';
import { roles } from '../config/constants';
import controller from '../controllers/cat.controller';

const router = express.Router();

router.get(
  '/',
  checkRole(roles.admin, roles.manager, roles.staff),
  celebrate({
    query: {
      offset: Joi.number()
        .integer()
        .min(0),
      limit: Joi.number()
        .integer()
        .min(0)
    }
  }),
  withController(controller.list)
);

export default router;
