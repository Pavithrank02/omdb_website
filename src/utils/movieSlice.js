import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: 'movie',
  initialState: {},
  reducers: {
    addMovie: (state, action) => {
      state.listMovie = action.payload
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload
    },
    addMovieSuggestion: (state, action) => {
      state.movieSuggest = action.payload
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload
    },
  }
})

export const { addMovie, addMovieInfo, addMovieSuggestion, addMovieDetails } = movieSlice.actions

export default movieSlice.reducer