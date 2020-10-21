import { movieGenres, movieListWithFilters } from "../../services/queryTMDB";
import { getRepository } from "typeorm";
import { FavoriteMovies } from "../../entity/FavoritMovies";
import { User } from "../../entity/User";
import { Filter } from "../../entity/Filter";
import { Genres } from "../../entity/Genres";

interface IArgumentsForMovieMutation {
  id: number
  movieId: number
  userId: string
}

export default {
  Query: {
    genresList: async () => { 
       const genresList = movieGenres().then((data) =>
       data.genres.map((data) => ({
         ...data,
         genreId: data.id,
         name: data.name,
       }))
     ); 
     return genresList
    },
    movieList: async () => {
      let userInSystem = getRepository(User, "default").findOne({id: 1})
      let filtersFromDB = getRepository(Filter).findOne({id: (await userInSystem).id})
      let genresArray = [];
      await getRepository(Genres).find({filterId: (await filtersFromDB).id}).then(genres => genres.map( genre => genresArray.push(genre.genreId)))
      const movieList = filtersFromDB.then((data) =>
        movieListWithFilters({
          year: data.year,
          rating: data.rating,
          genres: genresArray
        }).then((data) =>
          data.results.map((data) => ({
            ...data,
            movieId: data.id,
            title: data.title,
            img: data.poster_path,
            average: data.vote_average,
            date: data.release_date,
            overview: data.overview,
          }))
        )
      );
      return movieList
    }
  },

  Mutation: {
    deleteMovie: async (args, { movieId }: IArgumentsForMovieMutation) => {
      const movieRepository = getRepository(FavoriteMovies, "default");
      const movieRemove = await movieRepository.findOne(movieId);
      await movieRepository.remove(movieRemove);
    },

    addMovie: async (args, { id, movieId }: IArgumentsForMovieMutation) => {
      const userInSystem = getRepository(User, "default").findOne({id: 1})
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