import React from 'react';
import styles from './blah.module.css';

//function TopBanner({ saying }: any) {
function TopBanner(props: any) {
  return (
    <>
      <br></br>
      <div className="row text-center">
        <div className="col-2 mx-auto">
          <img src="./JoelHiltonHeadshot.jpg" alt="companyLogo" width="200" />
        </div>
        <div className="col align-self-center text-start text-center">
          <h1 className={styles.h1}>{props.saying}</h1>
          <h3>
            Welcome to my website to keep track of my ever-expanding movie
            collection.
          </h3>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
