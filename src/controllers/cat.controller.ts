import { Request } from 'express';
import { BaseController } from '../components';
import Service from '../services/cat.service';

class CatController extends BaseController {
  create(req: Request) {
    return Service.createCat(req.body);
  }
  
  list(req: Request) {
    return Service.getCatList(req.query);
  }
}

export default CatController;
