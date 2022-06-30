import React from 'react';

const MoviesItem = ({ movie }) => {
  const { Title, Year} = movie;
  return <div>{Title}{Year}</div>;
};

export default MoviesItem;
