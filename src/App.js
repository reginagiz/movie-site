import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MovieTable from './components/main_content/MovieTable';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesDatails from './components/main_content/MoviesDetails';
function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieTable />} />
          <Route path="/movie-item/:id" element={<MoviesDatails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
