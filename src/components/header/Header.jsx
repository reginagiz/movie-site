import React from 'react';
import st from './Header.module.css';
import logo from '../logo.png';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Header = () => {
  return (
    <div className={st.header}>
      <img src={logo} className={st.logo} alt="logo"></img>
      <h2 className={st.title}>Movies</h2>
      <Space direction="vertical" />
      <Search
        placeholder="search movie"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  );
};

export default Header;
