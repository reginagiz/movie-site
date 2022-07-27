import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import st from './TopMovie.module.css';

const TopMovie = ({ movie }) => {
  const router = useNavigate();

  return (
    <div className={st.movie}>
      <div className={st.poster}>
        <img src={movie.Poster} alt="Poster" />
      </div>
      <div>
        {movie.Title} ({movie.Year})<div>{movie.imdbRating}</div>
      </div>
      <Button onClick={() => router(`/movie-item/${movie._id}`)} type="primary">
        See more
      </Button>
    </div>
  );
};

export default TopMovie;
