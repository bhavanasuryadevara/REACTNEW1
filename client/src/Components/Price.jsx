import React from 'react';
import PriceCalculatorImage from './Images/Price Calculator.avif';

const CarouselPrice = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={PriceCalculatorImage} className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
           {/* <h5>Example Caption</h5>
            <h4>Example Subtitle</h4>*/}
            {/* Optional: Uncomment below to add a button */}
            {/* <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn custom-button" type="button">Book free consultation</button>
            </div> */}
          </div>
        </div>
        {/* Add more carousel items here if needed */}
      </div>
    </div>
  );
}

export default CarouselPrice;
