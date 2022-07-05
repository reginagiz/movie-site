import React from 'react';
import st from './Header.module.css';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';

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
    </div>
  );
};

export default Header;
