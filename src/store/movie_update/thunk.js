import axios from 'axios';
import { notification } from 'antd';
import { updateStart, updateComplete, updateError } from './movieUpdateSlice';
import { updateDetails } from '../movie_details';

export const updateMovie = (newMovie) => async (dispatch, getState) => {
  try {
    dispatch(updateStart());
    const data = await axios
      .put('/api/movies', newMovie)
      .then((res) => res.data);
    dispatch(updateComplete(data));
    dispatch(updateDetails(data));
    notification.open({
      message: 'Success!',
      description: 'Movie updated!',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  } catch {
    dispatch(updateError());
  }
};
