import routes from "../routes";

const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;
const url = "https://api.themoviedb.org/3/";
const express = require('express')
const app = express();
interface Data {
  year?: number | string,
  rating?: number | string,
  genres?: Array<number>,
  page?: number
}

export const movieGenres = () => {
  return fetch(`${url}genre/movie/list?api_key=${apiKey}}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err));
};

export const movieListWithFilters = ({
  year = "",
  rating = "",
  genres= [],
  page,
}: Data) => {
  const genre = genres.join();
  const genreUrl = `with_genres=${genre}`;
  const ratingUrl = `vote_average.gte=${rating}`;
  const yearUrl = `year=${year}`;
  const pageUrl = `page${page}`;
  return fetch(
    `${url}discover/movie?api_key=${apiKey}&${pageUrl}&${yearUrl}&${ratingUrl}&${genreUrl}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};