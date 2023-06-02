import React from "react";
import { Table, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovies } from "../../../store/movies";
import { useDispatch, useSelector } from "react-redux";
import getImageUrl from "../../../utils/getImageUrl";
import st from "./MovieTable.module.css";
import MovieSlider from "../../movie_slider/MovieSlider";

const MovieTable = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const loading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(fetchMovies);
  }, []);

  const movieTitle = (_id) => {
    let result = movies.filter((movie) => movie._id === _id);
    return result[0].Title;
  };

  const columns = [
    {
      title: "POSTER",
      dataIndex: "Poster",
      key: "Poster",
      render: (link) => (
        <div style={{ width: 80, height: 120 }}>
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={getImageUrl(link)}
            alt="Poster"
          />
        </div>
      ),
      width: "20%",
    },
    {
      title: "TITLE",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <a onClick={() => router(`/movie-item/${_id}`)}>{movieTitle(_id)}</a>
      ),
      width: "20%",
    },
    {
      title: "YEAR",
      dataIndex: "Year",
      key: "Year",
      sorter: (a, b) => a.Year - b.Year,
    },
    {
      title: "IMDB",
      dataIndex: "imdbRating",
      key: "imdbRating",
      sorter: (a, b) => a.imdbRating - b.imdbRating,
      width: "10%",
    },
    {
      title: "GENRE",
      dataIndex: "Genre",
      key: "Genre",
      filters: [
        {
          text: <span>Action</span>,
          value: "Action",
        },
        {
          text: <span>Adventure</span>,
          value: "Adventure",
        },
        {
          text: <span>Fantasy</span>,
          value: "Fantasy",
        },
        {
          text: <span>Drama</span>,
          value: "Drama",
        },
        {
          text: <span>Horror</span>,
          value: "Horror",
        },
        {
          text: <span>Thriller</span>,
          value: "Thriller",
        },
        {
          text: <span>Comedy</span>,
          value: "Comedy",
        },
        {
          text: <span>Crime</span>,
          value: "Crime",
        },
        {
          text: <span>Biography</span>,
          value: "Biography",
        },
        {
          text: <span>Sci-Fi</span>,
          value: "Sci-Fi",
        },
      ],
      onFilter: (value, record) => record.Genre.includes(value),
      filterSearch: true,
      width: "20%",
    },
    {
      title: "TYPE",
      dataIndex: "Type",
      title: "Type",
      key: "Type",
      filters: [
        {
          text: <span>Movie</span>,
          value: "movie",
        },
        {
          text: <span>Series</span>,
          value: "series",
        },
      ],
      onFilter: (value, record) => record.Type.startsWith(value),
      width: "10%",
    },
  ];
  return (
    <>
      {!movies ? (
        <Spin size="large" />
      ) : (
        <div>
          <MovieSlider />
          <div className={st.table}>
            <div className={st.table_container}>
              <Table
                dataSource={movies}
                columns={columns}
                style={{ minWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieTable;
