import React from 'react';
import st from './Header.module.css';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';
import MovieModal from '../main_content/movie_modal/MovieModal';

const Header = () => {
  const navigate = useNavigate();
  const navigateMovieTable = () => {
    navigate('/');
  };

  return (
    <div className={st.header}>
      <div >
        <a onClick={navigateMovieTable}>
          <img src={logo} className={st.logo} alt="logo"></img>
        </a>
      </div>
      <a onClick={navigateMovieTable}>
        <div className={st.title}>All movies</div>
      </a>
      <div className={st.modal}>
        <MovieModal />
      </div>
    </div>
  );
};

export default Header;
