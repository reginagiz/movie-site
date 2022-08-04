import React from 'react';
import { useEffect } from 'react';
import { fetchMovies } from '../../../store/movies';
import { useDispatch, useSelector } from 'react-redux';
import TopMovie from '../top_movie/TopMovie';
import { Spin } from 'antd';
import st from './TopMovies.module.css';
import { CrownOutlined } from '@ant-design/icons';


const TopMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const loading = useSelector((state) => state.movies.isLoading);
  const topMovies = movies?.filter((movie) => Number(movie.imdbRating) >= 8.5);
  topMovies?.sort((a, b) => Number(b.imdbRating - a.imdbRating));

  useEffect(() => {
    dispatch(fetchMovies);
  }, []);

  return (
    <>
      {loading || !topMovies ? (
        <div>
          <Spin />
        </div>
      ) : (
        <div className={st.movies}>
          <h3 className={st.title}>Top movies and series <CrownOutlined /></h3>
          {topMovies?.map((movie) => (
            <TopMovie movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default TopMovies;
