import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    showSearch: true
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload
    },
    toggleSearch: (state) => {
      state.showSearch = !state.showSearch
    },

  },
})

export const { changeLanguage, toggleSearch } = configSlice.actions
export default configSlice.reducer