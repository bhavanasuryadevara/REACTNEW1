import React from 'react';

import Homepage from './Images/Homepage.avif';
import Kitchen from './Images/kitchen.avif';

import diningroom from './Images/diningroom.avif';

import './Slidecss.css';

const Carousel = () => {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Homepage} className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Home to beautiful interiors</h5>
            <h4>Let's get started with your dream interiors</h4>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn custom-button" type="button">Book free consultation</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Kitchen} className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h1>Want to know how much your kitchen<br />interior will cost?</h1>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn custom-button" type="button">CALCULATE NOW</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={diningroom} className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h1>Come say hi to beautiful interiors</h1>
            <h4>Visit your nearest Experience Center to touch, feel and Experience our products</h4>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn custom-button" type="button">VISIT us</button>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );
  }
  
  export default Carousel;


