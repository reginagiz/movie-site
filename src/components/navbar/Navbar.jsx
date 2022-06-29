import React from 'react';
import st from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={st.navbar}>
      <div>Series</div>
      <div>Movies</div>
      <div>Cartoons</div>
    </div>
  );
};
 export default Navbar;