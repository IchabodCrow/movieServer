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
    genreId: Int
    name: String
  }

  type Filters {
    id: String
    year: String
    rating: String
    genre: Genres
    userId: String
  }

  type Query {
    readFiltres: [Filters]
    userById(id: ID): User
    movies: [Movie]
  }

  input GenreInput {
    genreId: Int
    name: String
  }

  type Mutation {
    updateFiltres(
      year: String
      rating: String
      genre: GenreInput!
    ): Genres
    deleteMovie(id: String): Boolean
    deleteFiltres(id: String, filter:String): Int
    addMovie(id: String, movieId: String): Movie
    login(email: String, password: String): Login
  }
`;