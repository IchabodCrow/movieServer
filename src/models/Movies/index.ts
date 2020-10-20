import { getRepository } from "typeorm";
import { FavoriteMovies } from "../../entity/FavoritMovies";
import { User } from "../../entity/User";

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
      await movieRepository.remove(movieRemove);
      
    },

    addMovie: async (args, { id, movieId }: IArgumentsForMovieMutation) => {
      const userInSystem = getRepository(User, "default").findOne()
      const favoriteMovies = getRepository(FavoriteMovies).create({
        userId: (await userInSystem).id,
        id,
        movieId,
      });
      
      return await getRepository(FavoriteMovies, "default").save(
        favoriteMovies
      );
    },
  }
}