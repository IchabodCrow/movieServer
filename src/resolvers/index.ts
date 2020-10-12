import { genres } from "../mockedData";

export const resolvers = {
  Query: {
    genres : () => genres,
  }
};