import { IResolvers } from 'graphql-tools';
import { thinid } from 'thinid';

const resolver: IResolvers = {
  Query: {
    cats(root, args, context, info) {
      return [
        {
          id: thinid(),
          name: 'Dog'
        },
        {
          id: thinid(),
          name: 'Pig'
        }
      ];
    }
  },
  Mutation: {
    createCat(root, args, context, info) {
      return {
        id: thinid(),
        name: 'Pig'
      };
    }
  }
};

export default resolver;
