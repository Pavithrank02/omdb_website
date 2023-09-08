import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favourite: window.localStorage.getItem('favourite') ? JSON.parse(window.localStorage.getItem('favourite')) : [],
  },
  reducers: {
    addFavorites: (state , action) => {
      const newMovie = [...state.favourite, action.payload];
			window.localStorage.setItem('favourite', JSON.stringify(newMovie));
			return {
				...state,
				favourite: newMovie,
			};

    },
    removeFavorites: (state, action) => {
      const originalFav = state.favourite;
			const filtredFav = originalFav.filter((f) => f.id !== action.payload);
			return {
				...state,
				favourite: filtredFav,
			};
    }
  }
})

export const {addFavorites, removeFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer