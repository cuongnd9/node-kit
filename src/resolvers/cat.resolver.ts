import { IResolvers } from 'graphql-tools';
import Service from '../services/cat.service';

const resolver: IResolvers = {
  Query: {
    async cats(_, args) {
      const list = await Service.getCatList(args);
      return list;
    }
  },
  Mutation: {
    async createCat(_, args) {
      const newCat = await Service.createCat(args);
      return newCat;
    }
  }
};

export default resolver;
