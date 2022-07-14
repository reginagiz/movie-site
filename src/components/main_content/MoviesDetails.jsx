import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../films.json';
import MovieCarousel from './MovieCarousel';
import st from './MovieDetails.module.css';
import { Spin } from 'antd';

const MoviesDatails = () => {
  // const params = useParams();
  // const movieId = params.id;
  // const result = data.movies.filter((movie) => movie.id === Number(movieId))[0];
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  async function getById(id) {
    setLoading(true);
    const response = await axios.get('http://localhost:5000/api/movies/' + id);
    setMovie(response.data);
    setLoading(false);
  }
  useEffect(() => {
    getById(params.id);
  }, []);

  return (
    <>
      {loading ? (
        <div className={st.spin}>
          <Spin size="large" />
        </div>
      ) : (
        <div className={st.details}>
          <div className={st.general}>
            <h1>
              {movie.Title} ({movie.Year})
            </h1>
            <div>Rated:{movie.Rated}</div>
            <div className={st.poster}>
              <img src={movie.Poster} alt="Poster" />
            </div>
          </div>
          <div className={st.about}>
            <h2>About the film</h2>
            <div>imdbRating:&nbsp;{movie.imdbRating}</div>
            <div>Released:&nbsp;{movie.Released}</div>
            <div>Country:&nbsp;{movie.Country}</div>
            <div>Genre:&nbsp;{movie.Genre}</div>
            <div>Director:&nbsp;{movie.Director}</div>
            <div>Writer:&nbsp;{movie.Writer}</div>
            <div>Actors:&nbsp;{movie.Actors}</div>
            <div>Runtime:&nbsp;{movie.Runtime}</div>
            <div>Plot:&nbsp;{movie.Plot}</div>
          </div>
          <div>
            <h2 style={{ marginTop: '40px' }}>
              Stills from the movie &nbsp;{movie.Title}
            </h2>
            <MovieCarousel movie={movie.Images} />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDatails;
