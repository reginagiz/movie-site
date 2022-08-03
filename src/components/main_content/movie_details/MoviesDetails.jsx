import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCarousel from '../movie_carousel/MovieCarousel';
import st from './MovieDetails.module.css';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../../store/movie_details';
import { deleteMovie } from '../../../store/movie_delete';
import { Button, Popconfirm } from 'antd';
import { Input } from 'antd';
import { updateMovie } from '../../../store/movie_update';
import getImageUrl from '../../../utils/getImageUrl';

const MoviesDatails = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const [isEdited, seIsEdited] = useState(false);
  const movie = useSelector((state) => state.movie_details.data);
  const loading = useSelector((state) => state.movie_details.isLoading);
  const [newMovie, setNewMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchMovieDetails(params.id));
  }, []);

  useEffect(() => {
    setNewMovie(movie);
  }, [movie]);

  const handleEdit = () => {
    seIsEdited(true);
  };

  const handleChange = (key) => (val) => {
    setNewMovie((prev) => ({ ...prev, [key]: val.target.value }));
  };

  const handleSave = () => {
    dispatch(updateMovie(newMovie));
    seIsEdited(false);
  };

  const { TextArea } = Input;

  return (
    <>
      {loading || !movie ? (
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
              <img src={getImageUrl(movie.Poster)} alt="Poster" />
            </div>
          </div>

          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => dispatch(deleteMovie(params.id))}
          >
            <Button className={st.delete} type="primary">
              Delete {movie.Type}
            </Button>
          </Popconfirm>
          <Button className={st.edit} type="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button className={st.save} disabled={!isEdited} onClick={handleSave}>
            Save
          </Button>

          <div className={st.about}>
            {isEdited ? (
              <div className={st.edit_form}>
                <h2>
                  About the{' '}
                  <Input
                    value={newMovie.Type}
                    onChange={handleChange('Type')}
                  />
                </h2>
                <div>
                  Released:
                  <Input
                    value={newMovie.Released}
                    onChange={handleChange('Released')}
                  />
                </div>
                <div>
                  imdbRating:
                  <Input
                    value={newMovie.imdbRating}
                    onChange={handleChange('imdbRating')}
                  />
                </div>
                <div>
                  Awards:
                  <Input
                    value={newMovie.Awards}
                    onChange={handleChange('Awards')}
                  />
                </div>
                <div>
                  Country:
                  <Input
                    value={newMovie.Country}
                    onChange={handleChange('Country')}
                  />
                </div>
                <div>
                  Genre:
                  <Input
                    value={newMovie.Genre}
                    onChange={handleChange('Genre')}
                  />
                </div>
                <div>
                  Director:
                  <Input
                    value={newMovie.Director}
                    onChange={handleChange('Director')}
                  />
                </div>
                <div>
                  Writer:
                  <Input
                    value={newMovie.Writer}
                    onChange={handleChange('Writer')}
                  />
                </div>
                <div>
                  Actors:
                  <Input
                    value={newMovie.Actors}
                    onChange={handleChange('Actors')}
                  />
                </div>
                <div>
                  Runtime:
                  <Input
                    value={newMovie.Runtime}
                    onChange={handleChange('Runtime')}
                  />
                </div>
                <div>
                  Plot:
                  <TextArea
                    rows={4}
                    value={newMovie.Plot}
                    onChange={handleChange('Plot')}
                  />
                </div>
              </div>
            ) : (
              <div>
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
            )}
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
