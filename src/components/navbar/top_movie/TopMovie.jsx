import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd';
import st from './TopMovie.module.css';
import getImageUrl from '../../../utils/getImageUrl';

const TopMovie = ({ movie }) => {
  const router = useNavigate();

  return (
    <div className={st.movie}>
      <a onClick={() => router(`/movie-item/${movie._id}`)} type="primary">
        <div className={st.poster}>
          <img src={getImageUrl(movie.Poster)} alt="Poster" />
        </div>
        <div className={st.info}>
          {movie.Title}
          <div className={st.rating}>{movie.imdbRating}</div>
        </div>
      </a>
    </div >
  );
};

export default TopMovie;
