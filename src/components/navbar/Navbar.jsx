import React from 'react';
import st from './navbar.module.css';
import TopMovies from './top_movies/TopMovies';

const Navbar = () => {
  return (
    <div className={st.navbar}>
      <TopMovies />
    </div>
  );
};

export default Navbar;
