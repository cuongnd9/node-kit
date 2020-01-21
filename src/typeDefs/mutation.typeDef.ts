import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Mutation {
    createCat(name: String!, color: String, image: String): Cat
  }
`;

export default typeDef;
