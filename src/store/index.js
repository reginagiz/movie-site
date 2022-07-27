import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import movies from './movies';
import movie_details from './movie_details';
import movie_create from './movie_create';
import movie_delete from './movie_delete';

export default configureStore({
  reducer: {
    movies,
    movie_details,
    movie_create,
    movie_delete,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
