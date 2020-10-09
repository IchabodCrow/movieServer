const { gql } = require('apollo-server');

export const typeDefs = gql`
  type User {
    name: String
    password: String
  }
 
  type Query {
    genres: String,
    # genresId: String,
    # name: String
  }

`;

