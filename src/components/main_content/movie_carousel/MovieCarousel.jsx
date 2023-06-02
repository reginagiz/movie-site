import React from "react";
import { Carousel } from "antd";
import getImageUrl from "../../../utils/getImageUrl";

const contentStyle = {
  margin: "0 auto",
  minWidth: "320px",
  maxWidth: "1160px",
};

const MovieCarousel = ({ movie }) => {
  return (
    <Carousel autoplay dots={false}>
      {movie?.map((image) => (
        <h3 style={contentStyle} key={image}>
          <img
            src={getImageUrl(image)}
            alt="Still"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </h3>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
