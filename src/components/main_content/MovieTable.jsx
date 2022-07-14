import React from 'react';
import data from '../../films.json';
import { Table, Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const MovieTable = () => {
  //const dataSource = data.movies;
  const router = useNavigate();
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const data = await axios
      .get('http://localhost:5000/api/movies')
      .then((res) => res.data);
    setMovies(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Poster',
      dataIndex: 'Poster',
      key: 'Poster',
      render: (link) => (
        <div style={{ width: 80, height: 90 }}>
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src={link}
            alt="Poster"
          />
        </div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Year',
      dataIndex: 'Year',
      key: 'Year',
      sorter: (a, b) => a.Year - b.Year,
    },
    {
      title: 'Genre',
      dataIndex: 'Genre',
      key: 'Genre',
      filters: [
        {
          text: <span>Action</span>,
          value: 'Action',
        },
        {
          text: <span>Adventure</span>,
          value: 'Adventure',
        },
        {
          text: <span>Fantasy</span>,
          value: 'Fantasy',
        },
        {
          text: <span>Drama</span>,
          value: 'Drama',
        },
        {
          text: <span>Horror</span>,
          value: 'Horror',
        },
        {
          text: <span>Thriller</span>,
          value: 'Thriller',
        },
        {
          text: <span>Comedy</span>,
          value: 'Comedy',
        },
        {
          text: <span>Crime</span>,
          value: 'Crime',
        },
        {
          text: <span>Biography</span>,
          value: 'Biography',
        },
        {
          text: <span>Sci-Fi</span>,
          value: 'Sci-Fi',
        },
      ],
      onFilter: (value, record) => record.Genre.includes(value),
      filterSearch: true,
      width: '40%',
    },
    {
      title: 'imdb Rating',
      dataIndex: 'imdbRating',
      key: 'imdbRating',
      sorter: (a, b) => a.imdbRating - b.imdbRating,
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      filters: [
        {
          text: <span>Movie</span>,
          value: 'movie',
        },
        {
          text: <span>Series</span>,
          value: 'series',
        },
      ],
      onFilter: (value, record) => record.Type.startsWith(value),
      width: '40%',
    },
    {
      title: 'Movie Details',
      dataIndex: '_id',
      key: '_id',
      render: (_id) => (
        // <NavLink to={`/movie-item/${id}`}>
        //   <Button type="primary">See more</Button>
        // </NavLink>
        <Button onClick={() => router(`/movie-item/${_id}`)} type="primary">
          See more
        </Button>
      ),
    },
  ];
  return <Table dataSource={movies} columns={columns} />;
};

export default MovieTable;
