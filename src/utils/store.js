import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice'
import configReducer from "./configSlice";
import favoriteReducer from './favoriteSlice'

const store = configureStore({
  reducer: {
    movie: movieReducer,
    config: configReducer,
    favorite: favoriteReducer,
  }
})

export default store