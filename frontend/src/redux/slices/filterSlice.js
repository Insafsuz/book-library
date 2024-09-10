import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter(state, action) {
      state.title = action.payload
    },
    setAuthorFilter(state, action) {
      state.author = action.payload
    },
    setOnlyFavoriteFitler(state) {
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters() {
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFitler,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer
