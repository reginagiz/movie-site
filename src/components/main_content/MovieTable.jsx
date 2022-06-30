import React from 'react';
import data from '../../films.json';
import { Table } from 'antd';

const MovieTable = () => {
  const dataSource = data.movies;
  const columns = [
    {
      title: 'Poster',
      dataIndex: 'Poster',
      key: 'Poster',
      render: (link) => (
        <img style={{ width: 80, height: 90 }} src={link} alt="Poster" />
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
    },
    {
      title: 'Genre',
      dataIndex: 'Genre',
      key: 'Genre',
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MovieTable;
