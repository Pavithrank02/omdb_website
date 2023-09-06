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
  }
})

export const {addMovie, addMovieInfo, addMovieSuggestion} = movieSlice.actions

export default movieSlice.reducer