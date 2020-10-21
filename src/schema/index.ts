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
    title: String
    img: String
    average: String
    date: String
    overview: String
  }

  type Genres {
    genreId: String
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
    genresList: [Genres]
    movieList: [Movie]
  }

  input GenreInput {
    genreId: Int
  }

  type Mutation {
    updateFiltres(year: String, rating: String, genre: GenreInput!): Genres
    deleteMovie(movieId: String): Int
    deleteFiltres(id: String, filter: String): Int
    addMovie(movieId: String): Movie
    login(email: String, password: String): Login
  }
`;