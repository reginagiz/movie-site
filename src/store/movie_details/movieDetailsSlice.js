import { createSlice } from '@reduxjs/toolkit';

export const movieDetailsSlice = createSlice({
  name: 'movie_details',
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
    updateDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchStart, fetchComplete, fetchError, updateDetails } =
  movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
