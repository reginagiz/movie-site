import { createSlice } from '@reduxjs/toolkit';

export const deleteMovieSlice = createSlice({
  name: 'movie_delete',
  initialState: {
    data: undefined,
    isLoading: false,
    isError: false,
  },
  reducers: {
    deleteStart: (state) => {
      state.isLoading = true;
    },
    deleteComplete: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    deleteError: (state) => {
      state.isError = true;
    },
  },
});

export const { deleteStart, deleteComplete, deleteError } =
deleteMovieSlice.actions;

export default deleteMovieSlice.reducer;