import axios from 'axios';
import { notification } from 'antd';
import { updateStart, updateComplete, updateError }from './movieUpdateSlice';

export const updateMovie= (newMovie) => async (dispatch, getState) => {
  try {
    dispatch(updateStart());
    const data = await axios
      .put('http://localhost:5000/api/movies' , newMovie )
      .then((res) => res.data);
    dispatch(updateComplete(data));
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