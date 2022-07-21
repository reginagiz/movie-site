import axios from 'axios';
import { notification } from 'antd';
import { createStart, createComplete, createError } from './movieCreateSlice';

export const createMovie = (movie) => async (dispatch, getState) => {
  try {
    dispatch(createStart());
    const data = await axios
      .post('http://localhost:5000/api/movies', { data: movie })
      .then((res) => res.data);
    dispatch(createComplete(data));
    notification.open({
      message: 'Success!',
      description:'Movie added!',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  } catch {
    dispatch(createError());
  }
};
