import React, { useState } from "react";
import st from "./MovieSlider.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchMovies } from "../../store/movies";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const MovieSlider = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const loading = useSelector((state) => state.movies.isLoading);
  const topMovies = movies?.filter((movie) => Number(movie.imdbRating) >= 8.2);
  topMovies?.sort((a, b) => Number(b.imdbRating - a.imdbRating));

  useEffect(() => {
    dispatch(fetchMovies);
  }, []);

  const router = useNavigate();

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className={st.slider}>
      <div className={st.slider_container}>
        <Slider {...settings} style={{ overflow: "hidden" }}>
          {topMovies?.map((movie) => (
            <button
              key={movie._id}
              onClick={() => router(`/movie-item/${movie._id}`)}
              className={st.cart_container}
            >
              <Card
                hoverable
                style={{
                  maxWidth: 180,
                  height: 260,
                }}
                bodyStyle={{ padding: "0", maxWidth: 180 }}
                cover={
                  <img
                    alt="Poster"
                    src={movie?.Poster}
                    style={{ minWidth: "100%", height: 260 }}
                  />
                }
              >
                <div className={st.raiting}>
                  <p>{`IMDB: ${movie?.imdbRating}`}</p>
                </div>
              </Card>
            </button>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSlider;
