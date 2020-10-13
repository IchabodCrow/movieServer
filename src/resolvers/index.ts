import { createConnection, getConnection, getRepository} from "typeorm";
import { FavoriteMovies } from "../entity/FavoritMovies";
import { Filtres } from "../entity/Filtres";
import { User } from "../entity/User";

interface IArgumentsForMovieMutation {
  id: number
  movieId: number
  userId: string
}

interface IArgumentsForFiltres {
  year?: string
  rating?: string
  genres?: string
  userId: string
}


export const resolvers = {
  Query: {
    readFiltres: async () => {
      const filtresRepository = getRepository(Filtres, "default");
      return await filtresRepository.find();
    },
    movies: async () => {
      const movies = getRepository(FavoriteMovies, "default");
      return await movies.find();
    },
    userById: async (arg) => {
      const user = getRepository(User, 'default');
      return await user.find()
    },
  },
  Mutation: {
    addFiltres: async (
      args,
      { year, rating, genres }: IArgumentsForFiltres
    ) => {
      const filtres = new Filtres();
      filtres.genres = genres;
      filtres.rating = rating;
      filtres.year = year;
      return await getRepository(Filtres, "default").save(filtres);
    },

    deleteFiltres: async (args, { movieId }: IArgumentsForMovieMutation) => {
      const movieRepository = getRepository(Filtres, "default");
      const movieRemove = await movieRepository.findOne(movieId);
      return await movieRepository.remove(movieRemove);
    },

    deleteMovie: async (args, { movieId }: IArgumentsForMovieMutation) => {
      const movieRepository = getRepository(FavoriteMovies, "default");
      const movieRemove = await movieRepository.findOne(movieId);
      return await movieRepository.remove(movieRemove);
    },

    addMovie: async (args, { id, movieId }: IArgumentsForMovieMutation) => {
      const favoriteMovies = new FavoriteMovies();
      favoriteMovies.id = id;
      favoriteMovies.movieId = movieId;
      return await getRepository(FavoriteMovies, "default").save(
        favoriteMovies
      );
    },

    login: async (args, { email, password }) => {
      const user = new User();
      user.firstName = email;
      user.password = password;
      return await getRepository(User, "default").save(user);
    },
  },
};