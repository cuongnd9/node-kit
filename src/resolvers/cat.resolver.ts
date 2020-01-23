import { IResolvers } from 'graphql-tools';
import service from '../services/cat.service';

const resolver: IResolvers = {
  Query: {
    async cats(root, args, context, info) {
      const list = await service.getCatList(args);
      return list;
    }
  },
  Mutation: {
    async createCat(root, args, context, info) {
      const newCat = await service.createCat(args);
      return newCat;
    }
  }
};

export default resolver;
