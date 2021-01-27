import gql from 'graphql-tag';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    name: String!
    genre: String!
    directorId: String!
  }
  type Query {
    getMovies: [Movie]
  }
`;
