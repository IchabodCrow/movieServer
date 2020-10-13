import UserResolver from "../models/User"
import MoviesResolver from "../models/Movies"
import FiltresResolver from "../models/Filtres"


export const resolvers = {
  Query: {
    ...FiltresResolver.Query,
    ...MoviesResolver.Query,
    ...UserResolver.Query
  },
  Mutation: {
    ...FiltresResolver.Mutation,
    ...MoviesResolver.Mutation,
    ...UserResolver.Mutation
  },
};