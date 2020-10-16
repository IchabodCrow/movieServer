import { getRepository } from "typeorm";
import { Filtres } from "../../entity/Filtres";
import { Genres } from "../../entity/Genres";
import { User } from "../../entity/User"

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
      console.log(genres)
      const userInSystem = getRepository(User, "default").findOne()
      const genre = getRepository(Genres).create({
        genre: genres
      })
      console.log(genre)
      const filtres = getRepository(Filtres).create({
        userId: (await userInSystem).id,
        year: year,
        rating: rating,
        genres: genre,
      });
      
        // await getRepository(Genres, "default").save(genre),
        await getRepository(Filtres, "default").save(filtres)

      return await getRepository(Genres, "default").save(genre)
    
    },

    deleteFiltres: async (args, { id }) => {
      console.log(id);
      
      const movieRepository = getRepository(Filtres, "default");
      const movieRemove = await movieRepository.findOne(id);
      await movieRepository.remove(movieRemove);
      return true
    },
  }
}