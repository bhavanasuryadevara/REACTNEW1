import React from 'react';
import Modular from './Images/Modular.avif';
import fullhome from './Images/fullhome.avif';
import vinviago  from './Images/reno.avif';
import renovationImage from './Images/reno.avif';
import commercialImage from './Images/commercial.avif';
import './Cardscss.css';

function CardComponent () {
    return (
        <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>One-stop shop for all things interiors</h2>
            <p>
              Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish.
            </p>
          </div>
        </div>
        <div className="card-deck">
          <div className="card">
            <img src={Modular} className="card-img-top" alt="Modular Interiors" />
            <div className="card-body">
              <h5 className="card-title">Modular Interiors</h5>
              <p className="card-text">Functional kitchen, wardrobe and storage</p>
              <a href="#" className='fas fa-chevron-right' style={{ fontSize: '24px', color: 'black' }}></a>
            </div>
          </div>
          <div className="card">
            <img src={fullhome } className="card-img-top" alt="Full home interiors" />
            <div className="card-body">
              <h5 className="card-title">Full home interiors</h5>
              <p className="card-text">Turkey interior solution for your home</p>
              <a href="#" className='fas fa-chevron-right' style={{ fontSize: '24px', color: 'black' }}></a>
            </div>
          </div>
          <div className="card">
            <img src={vinviago} className="card-img-top" alt="Luxury Interiors" />
            <div className="card-body">
              <h5 className="card-title">Luxury Interiors</h5>
              <p className="card-text">Tailored interiors that redefine elegance</p>
              <a href="#" className='fas fa-chevron-right' style={{ fontSize: '24px', color: 'black' }}></a>
            </div>
          </div>
          <div className="card">
            <img src={renovationImage} className="card-img-top" alt="Renovations" />
            <div className="card-body">
              <h5 className="card-title">Renovations</h5>
              <p className="card-text">Export solutions to upgrade your home</p>
              <a href="#" className='fas fa-chevron-right' style={{ fontSize: '24px', color: 'black' }}></a>
            </div>
          </div>
          <div className="card">
            <img src={commercialImage} className="card-img-top" alt="Commercial Interiors" />
            <div className="card-body">
              <h5 className="card-title">Commercial Interiors</h5>
              <p className="card-text">Hassle free solutions for your work space</p>
              <a href="main.html" className='fas fa-chevron-right' style={{ fontSize: '24px', color: 'black' }}></a>
            </div>
          </div>
        </div>
      </div> 


            
    );
};

export default CardComponent;
