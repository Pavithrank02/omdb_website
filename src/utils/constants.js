const API_KEY="aefd74f7"

export const OMDB_API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`

export const OMDB_MOVIE_API = `http://www.omdbapi.com/?apikey=${API_KEY}&s=movie&page=3`

export const OMDB_MOVIEINFO_API = `https://www.omdbapi.com/?apikey=${API_KEY}&t=movie`

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
