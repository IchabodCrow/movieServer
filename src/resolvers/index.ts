import { genres } from "../mockedData";

export const resolvers = {
  Query: {
    genres: () => genres,
    // genresId: () => genres.id,
    // name: () => genres.name
  },
};