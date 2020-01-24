import { IResolvers } from 'graphql-tools';
import service from '../services/cat.service';

const resolver: IResolvers = {
  Query: {
    async cats(_, args) {
      const list = await service.getCatList(args);
      return list;
    }
  },
  Mutation: {
    async createCat(_, args) {
      const newCat = await service.createCat(args);
      return newCat;
    }
  }
};

export default resolver;
