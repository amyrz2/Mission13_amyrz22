import React from 'react';

// PodcastPage function that displays image amd link to the Baconsale podcast
function PodcastPage() {
  return (
    <>
      <h1 className="text-center">Hello! Here is my awesome podcast</h1>
      <h1>Baconsale- A Hickory-Smoked Pop Culture Podcast</h1>
      <br />
      <div className="text-center">
        <a href="https://baconsale.com">
          <img src="./baconsale3.png" width="300" alt="BaconSale Logo" />
        </a>
      </div>

      <br />
      <br />
      <div className="text-center">
        Click the image or <a href="https://baconsale.com">here</a> to learn
        more
      </div>
    </>
  );
}

export default PodcastPage;
