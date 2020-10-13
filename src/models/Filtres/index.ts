import { getRepository } from "typeorm";
import { Filtres } from "../../entity/Filtres";
import { Genres } from "../../entity/Genres";

interface IArgumentsForFiltres {
  year?: string
  rating?: string
  genres?: string
  userId: string
}

export default {
  Query: {
    readFiltres: async () => {
      const filtresRepository = getRepository(Filtres, "default");
      return await filtresRepository.find();
    },
  }, 
  Mutation: {
    addFiltres: async (
      args,
      { year, rating, genres }: IArgumentsForFiltres
    ) => {
      const filtres = new Filtres();
      const genre = new Genres();

      filtres.rating = rating;
      filtres.year = year;
      genre.genre = genres;

      await getRepository(Filtres, "default").save(filtres);
      await getRepository(Genres, "default").save(filtres);
    },

    deleteFiltres: async (args, { movieId }) => {
      const movieRepository = getRepository(Filtres, "default");
      const movieRemove = await movieRepository.findOne(movieId);
      return await movieRepository.remove(movieRemove);
    },
  }
}