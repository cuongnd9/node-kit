import { Request } from 'express';
import service from '../services/cat.service';

function create(req: Request) {
  return service.createCat(req.body);
}

function list(req: Request) {
  return service.getCatList(req.query);
}

export default {
  create,
  list
};
