import { fetchStart, fetchComplete, fetchError } from './moviesSlice';
import axios from 'axios';

export const fetchMovies = async (dispatch, getState) => {
  try {
    dispatch(fetchStart());
    const data = await axios
      .get('/api/movies')
      .then((res) => res.data);
    dispatch(fetchComplete(data))
  } catch {
    dispatch(fetchError());
  }
};
