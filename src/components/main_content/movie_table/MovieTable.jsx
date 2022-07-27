import React, { useState } from 'react';
import { Table, Button, Spin} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMovies } from '../../../store/movies';
import { useDispatch, useSelector } from 'react-redux';
import MovieModal from '../movie_modal/MovieModal';

const MovieTable = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const loading = useSelector((state) => state.movies.isLoading);

  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // const onSelectChange = (newSelectedRowKeys) => {
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };
  // const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    dispatch(fetchMovies);
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
      title: 'Type',
      key: 'Type',
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
        <Button onClick={() => router(`/movie-item/${_id}`)} type="primary">
          See more
        </Button>
      ),
    },
  ];
  return (
    <>
      {loading || !movies ? (
        <Spin size="large" />
      ) : (
        <div>
          <MovieModal />
          <Table
            dataSource={movies}
            columns={columns}
            // rowSelection={rowSelection}
            style={{
              marginTop: 16,
            }}
          />
        </div>
      )}
    </>
  );
};

export default MovieTable;
