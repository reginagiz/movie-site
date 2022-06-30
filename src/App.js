import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MovieTable from './components/main_content/MovieTable';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <MovieTable />
    </div>
  );
}

export default App;
