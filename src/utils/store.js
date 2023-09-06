import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice'
import configReducer from "./configSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    config: configReducer,

  }
})

export default store