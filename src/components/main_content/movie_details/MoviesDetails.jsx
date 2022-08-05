import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCarousel from '../movie_carousel/MovieCarousel';
import st from './MovieDetails.module.css';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../../store/movie_details';
import { deleteMovie } from '../../../store/movie_delete';
import { Button, Popconfirm } from 'antd';
import getImageUrl from '../../../utils/getImageUrl';
import EditMovie from '../edit_movie_form/EditMovie';

const MoviesDatails = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const [isEdited, seIsEdited] = useState(false);
  const movie = useSelector((state) => state.movie_details.data);
  const loading = useSelector((state) => state.movie_details.isLoading);

  useEffect(() => {
    dispatch(fetchMovieDetails(params.id));
  }, [params.id]);

  const handleEdit = () => {
    isEdited ? seIsEdited(false) : seIsEdited(true);
  };

  return (
    <>
      {loading || !movie ? (
        <div className={st.spin}>
          <Spin size="large" />
        </div>
      ) : (
        <div className={st.movie}>
          <div className={st.buttons}>
            <Button className={st.edit} type="primary" onClick={handleEdit}>
              Edit
            </Button>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => dispatch(deleteMovie(params.id))}
            >
              <Button className={st.delete}>Delete {movie.Type}</Button>
            </Popconfirm>
          </div>
          {isEdited ? (
            <EditMovie movie={movie} onSave={handleEdit} />
          ) : (
            <div className={st.details}>
              <div className={st.general}>
                <h2>
                  {movie.Title} ({movie.Year})
                </h2>
                <div>Rated:{movie.Rated}</div>
                <div className={st.poster}>
                  <img src={getImageUrl(movie.Poster)} alt="Poster" />
                </div>
              </div>
              <div className={st.about}>
                <h2>About the {movie.Type}</h2>
                <div>Released:&nbsp;{movie.Released}</div>
                <div>imdbRating:&nbsp;{movie.imdbRating}</div>
                <div>Awards:&nbsp;{movie.Awards}</div>
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
        </div>
      )}
    </>
  );
};

export default MoviesDatails;
