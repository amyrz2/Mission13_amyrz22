import React from 'react';
import './App.css';
import TopBanner from './blah';
import MovieList from './movies';
import Navbar from './navBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner saying="Joel Hilton's Movie Collection" />
      <MovieList />
    </div>
  );
}

export default App;
