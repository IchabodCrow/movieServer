const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;
const url = "https://api.themoviedb.org/3/";

interface IFilterData {
  year?: string,
  rating?: string,
  genres?: Array<number>,
  page?: number
}

const genreFilter = (genres: Array<number>) => {
  genres.length > 0 && 'with_genres=$' + genres.join()
}
const ratingFilter = (rating: string) => {
  rating.length > 0 && 'vote_average.gte=' + rating 
}
const yearFilter = (year: string) => {
  year.length > 0 && 'year=' + year
}
const pageNumb = (page: number) => {
  page && 'page' + page
}

export const movieGenres = () => {
  return fetch(`${url}genre/movie/list?api_key=${apiKey}}`)
    .then(res => res.json())
    .then(data =>  data)
    .catch(err => console.error(err));
};

export const movieListWithFilters = ({
  year = "",
  rating = "",
  genres= [],
  page,
}: IFilterData) => {
  return fetch(
    `${url}discover/movie?api_key=${apiKey}&${pageNumb(page)}&${yearFilter(year)}&${ratingFilter(rating)}&${genreFilter(genres)}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};