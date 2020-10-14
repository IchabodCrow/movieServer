const { gql } = require('apollo-server');

export const typeDefs = gql`
  type User {
    id: String
    name: String
    password: String
  }

  type Login {
    token: String
    user: User
  }

  type Movie {
    movieId: String
  }

  type Genres {
    genres: String
  }

  type Filters {
    id: ID
    year: String
    rating: String
    genres: String
    userId: String
  }

  type Query {
    readFiltres: [Filters]
    userById(id: ID): User
    movies: [Movie]
  }

  type Mutation {
    addFiltres(
      year: String
      rating: String
      genres: String
      userId: String
    ): Filters
    deleteMovie(id: String): Movie
    deleteFiltres(id: String): Filters
    addMovie(id: String, movieId: String): Movie
    login(email: String, password: String): Login
  }
`;