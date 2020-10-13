import { getRepository } from "typeorm";
import { FavoriteMovies } from "../../entity/FavoritMovies";

interface IArgumentsForMovieMutation {
  id: number
  movieId: number
  userId: string
}

export default {
  Query: {
    movies: async () => {
      const movies = getRepository(FavoriteMovies, "default");
      return await movies.find();
    },
  }, 
  Mutation: {
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
  }
}