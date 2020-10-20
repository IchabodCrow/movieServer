import { User } from "../../entity/User";
import { AdvancedConsoleLogger, getRepository } from "typeorm";
import { Filter } from "../../entity/Filter";
import { Genres } from "../../entity/Genres";
import { Console } from "console";

interface IArgumentsForFiltres {
  year?: string
  rating?: string
  genre?: {
    genresId: number,
    name: string
  }
  userId: string
}

export default {
  Query: {
    readFiltres: async () => {
      const filtresRepository = getRepository(Filter, "default");
      return await filtresRepository.find();
    },
  },
  Mutation: {
    updateFiltres: async (
      args,
      { year, rating, genre }: IArgumentsForFiltres
    ) => {
      let genreFromDB = await getRepository(Genres).findOne({
        genreId: genre.genresId,
      });
      if (!genreFromDB) {
        genreFromDB = await getRepository(Genres).create(genre);
        await getRepository(Genres).save(genreFromDB);
      }

      let filtresFromDB = await getRepository(Filter).findOne({ id: 1 });
      
      if (!filtresFromDB) {
        filtresFromDB = await getRepository(Filter).create({
          year: year,
          rating: rating,
          id: 1,
        });
        await getRepository(Filter).save(filtresFromDB);
      }
      genreFromDB.filterId = filtresFromDB.id;
      await getRepository(Genres).save(genreFromDB);
      return genreFromDB;
    },

    deleteFiltres: async (args, { id, filter }) => {
      if (filter === "cloudGenres") {
        let genreFromDB = await getRepository(Genres);
        let genreRemove = await genreFromDB.find({ filterId: 1, genreId: id });
        await genreFromDB.remove(genreRemove);
      } else {
        let filtresFromDB = await getRepository(Filter);
        let filterRemove = await filtresFromDB.findOne({ id: 1 });
        await filtresFromDB.remove(filterRemove);
      }
      return id;
    },
  },
};