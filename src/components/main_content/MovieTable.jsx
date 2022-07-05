import React from 'react';
import data from '../../films.json';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';

const MovieTable = () => {
  const dataSource = data.movies;
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
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <NavLink to={`/movie-item/${id}`}>
          <Button type="primary">See more</Button>
        </NavLink>
      ),
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MovieTable;
