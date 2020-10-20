import UserResolver from "../models/User"
import MoviesResolver from "../models/Movies"
import FiltresResolver from "../models/Filtres"
import FavoriteMovie from "../models/FavoriteMovie";


export const resolvers = {
  Query: {
    ...FiltresResolver.Query,
    ...MoviesResolver.Query,
    ...UserResolver.Query
  },
  Mutation: {
    ...FiltresResolver.Mutation,
    ...MoviesResolver.Mutation,
    ...UserResolver.Mutation,
    ...FavoriteMovie.Mutation
  },
};