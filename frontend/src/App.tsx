// Amy Zhang - Section 2
// A website for Joel Hilton and his movie collection

// import react and all the functions
import React from 'react';
import './App.css';
import TopBanner from './blah';
import MovieList from './movies';
import NavigationBar from './nav';
import PodcastPage from './podcast';

// main App function
// checks path in the nav bar and links it to different functions through content variable
function App() {
  const path = window.location.pathname;
  let content;

  if (path === '/listMovies') {
    content = <MovieList />;
  } else if (path === '/home') {
    content = <TopBanner saying="Joel Hilton's Movie Collection" />;
  } else if (path === '/podcast') {
    content = <PodcastPage />;
  }

  return (
    <div className="App">
      <NavigationBar />
      {content}
    </div>
  );
}

// original method that didn't work

// function App() {
//   return (
//     <div className="App">
//       <NavigationBar />
//       <TopBanner saying="Joel Hilton's Movie Collection" />
//       <MovieList />
//     </div>
//   );
// }

export default App;
