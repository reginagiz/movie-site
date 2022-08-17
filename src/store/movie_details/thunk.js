import { fetchStart, fetchComplete, fetchError } from './movieDetailsSlice';
import axios from 'axios';
import { buildUrl } from '../../utils/buildUrl';


export const fetchMovieDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(fetchStart());
    const data = await axios
      .get(buildUrl('api/movies/' + id))
      .then((res) => res.data);
    dispatch(fetchComplete(data));
  } catch {
    dispatch(fetchError());
  }
};

