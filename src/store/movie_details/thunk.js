import { fetchStart, fetchComplete, fetchError } from './movieDetailsSlice';
import axios from 'axios';

export const fetchMovieDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(fetchStart());
    const data = await axios
      .get('http://localhost:5000/api/movies/' + id)
      .then((res) => res.data);
    dispatch(fetchComplete(data));
  } catch {
    dispatch(fetchError());
  }
};
