const { gql } = require('apollo-server');

export const typeDefs = gql`
  type User {
    name: String
    password: String
  }

  type Login {
    token: String
    user: User
  }

  type Movie {
    id: String
    name: String
  }

  type Query {
    userById(id: Int): User
    filters: String
    movies: [Movie]
  }

  type Mutation {
    deleteMovie(id: String): [Movie]
    addMovie(id: String): [Movie]
    login(email: String!, password: String!): Login
  }
`;