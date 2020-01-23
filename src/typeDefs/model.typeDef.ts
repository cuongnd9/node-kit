import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Cat {
    id: ID
    name: String
    color: String
    image: String
  }
`;

export default typeDef;
