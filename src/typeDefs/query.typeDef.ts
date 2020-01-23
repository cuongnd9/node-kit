import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Query {
    cats: [Cat]
    cat(id: ID!): Cat
  }
`;

export default typeDef;
