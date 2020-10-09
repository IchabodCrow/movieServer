import { movieGenres } from "../services/queryTMDB";

export const genres = movieGenres().then( data => JSON.stringify(data))