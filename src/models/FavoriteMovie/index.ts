import { FavoriteMovies } from "../../entity/FavoritMovies"
import { User } from "../../entity/User"
import { getRepository } from "typeorm"

interface IArgumentsForFavoriteMovieMutation {

}

export default {
  Query: {
  
  }, 
  Mutation: {
    addMovie: async (args, {id, movieId}) => {
      let userInSystem = await getRepository(User).findOne({id: 1})
      let favoriteMovieFromDB = await getRepository(FavoriteMovies).findOne({movieId: movieId})
      if(!favoriteMovieFromDB) {
        favoriteMovieFromDB = await getRepository(FavoriteMovies).create({movieId: movieId, userId: userInSystem.id})
      } {
        favoriteMovieFromDB.movieId = movieId
        favoriteMovieFromDB.userId = userInSystem.id
      }
      await getRepository(FavoriteMovies).save(favoriteMovieFromDB)
      return favoriteMovieFromDB
    },
    deleteMovie: async (args, {movieId}) => {
      let userInSystem = await getRepository(User).findOne({id: 1})
      let favoriteMovieFromDB = await getRepository(FavoriteMovies)
      let favoriteMovieFromDBRemove = await favoriteMovieFromDB.find({movieId: movieId, userId: userInSystem.id})
      await favoriteMovieFromDB.remove(favoriteMovieFromDBRemove)
      return movieId
    }
  }
}