import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { checkRole } from '../components';
import { roles } from '../components/constants';
import Controller from '../controllers/cat.controller';

const router = express.Router();
const controller = new Controller();

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
  controller.action('list'),
);

router.post(
  '/',
  checkRole(roles.admin, roles.manager, roles.staff),
  celebrate({
    body: {
      name: Joi.string(),
      color: Joi.string(),
      image: Joi.string(),
    },
  }),
  controller.action('create'),
);

export default router;
