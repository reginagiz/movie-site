import React from "react";
import Header from "./components/header/Header";
import  './App.css'
import Navbar from './components/navbar/Navbar';
import Movies from "./components/main_content/Movies";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Movies/>
    </div>
  );
}

export default App;
