import React from 'react';
import Header from './components/header/Header';
import './App.css';
import MovieTable from './components/main_content/movie_table/MovieTable';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesDatails from './components/main_content/movie_details/MoviesDetails';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieTable />} />
          <Route path="/movie-item/:id" element={<MoviesDatails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
