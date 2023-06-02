import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCarousel from "../movie_carousel/MovieCarousel";
import st from "./MovieDetails.module.css";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../../store/movie_details";
import { deleteMovie } from "../../../store/movie_delete";
import { Button, Popconfirm } from "antd";
import getImageUrl from "../../../utils/getImageUrl";
import EditMovie from "../edit_movie_form/EditMovie";

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
          {isEdited ? (
            <EditMovie movie={movie} onSave={handleEdit} />
          ) : (
            <div className={st.movie_container}>
              <div className={st.buttons_container}>
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
              <div className={st.movie_container_details}>
                <div className={st.poster_container}>
                  <img src={getImageUrl(movie.Poster)} alt="Poster" />
                </div>
                <div className={st.movie_description}>
                  <h2>
                    {movie.Title} ({movie.Year})
                  </h2>
                  <div>Rated:{movie.Rated}</div>
                  <div>
                    <b>Released:</b>&nbsp;{movie.Released}
                  </div>
                  <div>
                    <b>imdbRating:</b>&nbsp;{movie.imdbRating}
                  </div>
                  <div>
                    <b>Awards:</b>&nbsp;{movie.Awards}
                  </div>
                  <div>
                    <b>Country:</b>&nbsp;{movie.Country}
                  </div>
                  <div>
                    <b>Genre:</b>&nbsp;{movie.Genre}
                  </div>
                  <div>
                    <b>Director:</b>&nbsp;{movie.Director}
                  </div>
                  <div>
                    <b>Writer:</b>&nbsp;{movie.Writer}
                  </div>
                  <div>
                    <b>Actors:</b>&nbsp;{movie.Actors}
                  </div>
                  <div>
                    <b>Runtime:</b>&nbsp;{movie.Runtime}
                  </div>
                  <div>
                    <b>Plot:</b>&nbsp;{movie.Plot}
                  </div>
                </div>
              </div>
              <div className={st.movie_carousel}>
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
