import React from 'react';
import { Carousel } from 'antd';
import MovieImage from './MovieImage';

const MovieCarousel = ({ movie }) => {
  return (
    <Carousel
      autoplay
      style={{
        width: '900px',
        height: '520px',
        marginTop: '30px',
      }}
    >
      {movie.Images.map((image) => (
        <MovieImage image={image} />
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
