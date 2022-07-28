import { createSlice } from '@reduxjs/toolkit';

export const updateMovieSlice = createSlice({
  name: 'movie_update',
  initialState: {
    data: undefined,
    isLoading: false,
    isError: false,
  },
  reducers: {
    updateStart: (state) => {
      state.isLoading = true;
    },
    updateComplete: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    updateError: (state) => {
      state.isError = true;
    },
  },
});

export const { updateStart, updateComplete, updateError } =
updateMovieSlice.actions;

export default updateMovieSlice.reducer;