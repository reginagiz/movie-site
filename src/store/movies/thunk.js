import { fetchStart, fetchComplete, fetchError } from './moviesSlice';
import axios from 'axios';

export const fetchMovies = async (dispatch, getState) => {
  try {
    dispatch(fetchStart());
    const data = await axios
      .get('http://localhost:5000/api/movies')
      .then((res) => res.data);
    dispatch(
      fetchComplete(data.map((item, index) => ({ ...item, key: index })))
    );
  } catch {
    dispatch(fetchError());
  }
};
