import React from "react";
import st from "./Header.module.css";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import MovieModal from "../main_content/movie_modal/MovieModal";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={st.header}>
      <div className={st.header_container}>
        <button className={st.logo_container} onClick={() => navigate("/")}>
          <img src={logo} className={st.logo} alt="logo"></img>
        </button>
        <button className={st.title_container} onClick={() => navigate("/")}>
          <h2>All movies</h2>
        </button>
        <MovieModal />
      </div>
    </div>
  );
};

export default Header;
