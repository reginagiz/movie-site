import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: undefined,
    isLoading: false,
    isError: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchComplete: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchError: (state) => {
      state.isError = true;
    },
  },
});

export const { fetchStart, fetchComplete, fetchError} = moviesSlice.actions;

export default moviesSlice.reducer;
