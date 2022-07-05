import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../films.json';
import MovieCarousel from './MovieCarousel';
import st from './MovieDetails.module.css';

const MoviesDatails = () => {
  const params = useParams();
  const movieId = params.id;
  const result = data.movies.filter((movie) => movie.id === Number(movieId))[0];

  return (
    <div className={st.details}>
      <div className={st.general}>
        <h1>
          {result.Title} ({result.Year})
        </h1>
        <div>Rated:{result.Rated}</div>
        <div className={st.poster}>
          <img src={result.Poster} alt="Poster" />
        </div>
      </div>
      <div className={st.about}>
        <h2>About the film</h2>
        <div>imdbRating:&nbsp;{result.imdbRating}</div>
        <div>Released:&nbsp;{result.Released}</div>
        <div>Country:&nbsp;{result.Country}</div>
        <div>Genre:&nbsp;{result.Genre}</div>
        <div>Director:&nbsp;{result.Director}</div>
        <div>Writer:&nbsp;{result.Writer}</div>
        <div>Actors:&nbsp;{result.Actors}</div>
        <div>Runtime:&nbsp;{result.Runtime}</div>
        <div>Plot:&nbsp;{result.Plot}</div>
      </div>
      <div>
      <h2 style={{marginTop:'40px'}}>Stills from the movie &nbsp;{result.Title}</h2>
      <MovieCarousel movie={result} />
      </div>
    </div>
  );
};

export default MoviesDatails;
