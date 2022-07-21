import { createSlice } from '@reduxjs/toolkit';

export const createMovieSlice = createSlice({
  name: 'movie_create',
  initialState: {
    data: undefined,
    isLoading: false,
    isError: false,
  },
  reducers: {
    createStart: (state) => {
      state.isLoading = true;
    },
    createComplete: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    createError: (state) => {
      state.isError = true;
    },
  },
});

export const { createStart, createComplete, createError } =
createMovieSlice.actions;

export default createMovieSlice.reducer;
