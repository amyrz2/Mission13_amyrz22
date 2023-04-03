import React, { useState } from 'react';
import styles from './blah.module.css';
import MovieList from './movies';
import PodcastPage from './podcast';

//function TopBanner({ saying }: any) {
function TopBanner(props: any) {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <br></br>
            <div className="row text-center">
              <div className="col-2 mx-auto">
                <img
                  src="./JoelHiltonHeadshot.jpg"
                  alt="companyLogo"
                  width="200"
                />
              </div>
              <div className="col align-self-center text-start text-center">
                <h1 className={styles.h1}>{props.saying}</h1>
                <h3>Welcome to my website to keep track of</h3>
                <h3>my ever-expanding movie collection.</h3>
              </div>
              <div className="col-2 mx-auto">
                <img
                  src="./JoelHiltonHeadshot.jpg"
                  alt="companyLogo"
                  width="200"
                />
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setCurrentPage('podcast')}
            >
              My Cool Podcast
            </button>
            <button
              className="btn btn-primary"
              style={{ marginLeft: '10px' }}
              onClick={() => setCurrentPage('movies')}
            >
              All My Movies
            </button>
          </>
        );
      case 'podcast':
        return <PodcastPage />;
      case 'movies':
        return <MovieList />;
      default:
        return null;
    }
  };

  return <>{renderPage()}</>;
}

export default TopBanner;
