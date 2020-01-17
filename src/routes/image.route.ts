import express from 'express';
import upload from '../helpers/upload';
import withController from '../helpers/withController';
import ImageController from '../controllers/image.controller';

const ctr = new ImageController();

const router = express.Router();

router.post(
  '/upload-single',
  upload.single('image'),
  withController(ctr.uploadSingle)
);

router.post(
  '/upload-multi',
  upload.array('images', 10),
  withController(ctr.uploadMulti)
);

export default router;
