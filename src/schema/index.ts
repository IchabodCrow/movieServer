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
    movieId: String
  }

  type Genres {
    genres: String
  }

  type Filters {
    id: String
    year: String
    rating: String
    genres: Genres
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
    ): Boolean
    deleteMovie(id: String): Boolean
    deleteFiltres(id: String): Boolean
    addMovie(id: String, movieId: String): Movie
    login(email: String, password: String): Login
  }
`;