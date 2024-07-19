import React from 'react';
import './card2css.css';
import livingroomimage1 from './Images/living1.avif';
import masterbedroom2 from './Images/masterbedroom2.avif';
import falseceiling3 from './Images/false3.avif';
import homesbylivspace4 from './Images/homes4.avif';
import kitchen5 from './Images/kitchen5.avif'
import  wardrobe6 from './Images/wardrobe6.avif';
import kids7 from './Images/kids7.avif';
import homeoffice8 from './Images/home-office8.avif';
import guestbedroom9 from './Images/guest-bedroom9.avif';
import foyer10 from './Images/foyer10.avif';
import dining11 from './Images/dining11.avif';
import bathroom12 from './Images/bathroom12.avif';
import livespace  from './Images/livspace-footer-banner-web-1675656100-Qm9z2 (1).avif';
import './Navbar1'
function Carousel() {
  return (
    <div className="container2">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>Inspiration for home interior designs</h2>
            <p>
              Give your home a new look with these interior design ideas curated for you
            </p>
          </div>
        </div>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="1000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4 custom-column">
                <img src={livingroomimage1} alt="Living Room" />
                <h2>Living Room</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={masterbedroom2} alt="Master Bedroom" />
                <h2>Master Bedroom</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={falseceiling3} alt="False Ceiling" />
                <h2>False Ceiling</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={homesbylivspace4} alt="Homes by Livspace" />
                <h2>Homes by Livspace</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={kitchen5} alt="Kitchen" />
                <h2>Kitchen</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={wardrobe6} alt="Wardrobe" />
                <h2>Wardrobe</h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4 custom-column">
                <img src={kids7} alt="Kids Bedroom" />
                <h2>Kids Bedroom</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={homeoffice8} alt="Home Office" />
                <h2>Home Office</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={guestbedroom9} alt="Guest Bedroom" />
                <h2>Guest Bedroom</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={foyer10} alt="Foyer" />
                <h2>Foyer</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={dining11} alt="Dining" />
                <h2>Dining</h2>
              </div>
              <div className="col-md-4 custom-column">
                <img src={bathroom12} alt="Bathroom" />
                <h2>Bathroom</h2>
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
    </div>
  );
}
  
function ImageContainer() {
  return (
    <div className="image-container">
      <img src={livespace} alt="Bathroom" />
      <div className="centered-content">
        <h2>Your dream home is just a click away</h2>
        
          <button className="centered-button">GET STARTED</button>
  
      </div>
    </div>
  );
}

export { Carousel, ImageContainer };