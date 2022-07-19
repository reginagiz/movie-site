import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import movies from './movies';
import movie_details from './movie_details';

export default configureStore({
  reducer: {
    movies,
    movie_details,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
