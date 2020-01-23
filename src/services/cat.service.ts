import CatEntity from '../entities/cat.entity';
import { Cat } from '../models';

function createCat(cat: Cat) {
  return CatEntity.create(cat);
}

function getCatList({ skip = 0, take = 10 }: { skip?: number; take?: number }) {
  return CatEntity.find({
    skip,
    take
  });
}

export default {
  createCat,
  getCatList
};
