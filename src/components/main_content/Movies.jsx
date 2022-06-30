import React from 'react';
import st from './Movies.module.css';
import data from '../../films.json';
import MoviesItem from './MovieItem';

const Movies = () => {
  const movies = data.movies;
  return (
    <div className={st.movies}>
      {movies.map((movie) => (
        <MoviesItem movie={movie}/>
      ))}
    </div>
  );
};

export default Movies;
