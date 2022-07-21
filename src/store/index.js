import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import movies from './movies';
import movie_details from './movie_details';
import movie_create from './movie_create';

export default configureStore({
  reducer: {
    movies,
    movie_details,
    movie_create,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
