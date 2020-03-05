import { Request } from 'express';
import { AppController } from 'nsdk';
import Service from '../services/cat.service';

class CatController extends AppController {
  create(req: Request) {
    return Service.createCat(req.body);
  }
  
  list(req: Request) {
    return Service.getCatList(req.query);
  }
}

export default CatController;
