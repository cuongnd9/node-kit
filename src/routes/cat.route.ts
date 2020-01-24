import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { checkRole, withController } from '../components';
import { roles } from '../components/constants';
import controller from '../controllers/cat.controller';

const router = express.Router();

router.get(
  '/',
  checkRole(roles.admin, roles.manager, roles.staff),
  celebrate({
    query: {
      skip: Joi.number()
        .integer()
        .min(0),
      take: Joi.number()
        .integer()
        .min(0),
    },
  }),
  withController(controller.list),
);

router.post(
  '/',
  // checkRole(roles.admin, roles.manager, roles.staff),
  celebrate({
    body: {
      name: Joi.string(),
      color: Joi.string(),
      image: Joi.string(),
    },
  }),
  withController(controller.create),
);

export default router;
