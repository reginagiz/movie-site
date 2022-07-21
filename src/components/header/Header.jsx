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
      <a onClick={navigateMovieTable}>
        <img src={logo} className={st.logo} alt="logo"></img>    
      </a>
      <div>
          <h2 className={st.title}>Movies</h2>
        </div>
        <div><MovieModal/></div>
    </div>
  );
};

export default Header;
