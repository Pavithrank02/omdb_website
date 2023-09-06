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
  }
})

export const {addMovie, addMovieInfo} = movieSlice.actions

export default movieSlice.reducer