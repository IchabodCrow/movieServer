export const resolvers = {
  Query: {
    filters: (feltres) => {
      if (!feltres) {
        throw new Error();
      }
      return feltres;
    },
    movies: (movies) => {
      if (!movies) {
        throw new Error();
      }
      return movies;
    },
    userById: (arg) => {
      if (!arg) {
        throw new Error();
      }
      return arg.map((user) => user === user.id);
    },
  },
  Mutation: {
    deleteMovie(args, { id }) {},

    addMovie(args, { id }) {},

    login(args, { email, password }) {},
  },
};