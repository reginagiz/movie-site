import axios from 'axios';
import { notification } from 'antd';
import { deleteStart, deleteComplete, deleteError } from './movieDeleteSlice';

export const deleteMovie = (id) => async (dispatch, getState) => {
  try {
    dispatch(deleteStart());
    const data = await axios
      .delete('http://localhost:5000/api/movies/' + id)
      .then((res) => res.data);
    dispatch(deleteComplete(data));
    notification.open({
      message: 'Success!',
      description: 'Movie removed!',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  } catch {
    dispatch(deleteError());
  }
};
