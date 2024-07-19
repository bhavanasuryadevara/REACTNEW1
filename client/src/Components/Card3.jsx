import React from 'react';
import './DesignCards.css'; // Import your CSS file

import kitchenImage from './Images/kitchen-d.avif';
import design2Image from './Images/design2.avif';
import design3Image from './Images/design3.avif';
import design4Image from './Images/home4.avif';
import design5Image from './Images/puja room5.avif'; // Use a more descriptive name
import design6Image from './Images/studying.avif';
import Navbar from './Navbar1'; // Assuming Navbar1 is a separate component

import Footer from './Footer';
import Navbar2 from './Navbar2';

const DesignCards2 = () => {
  return (
    <div className="content">
    <div className="design-cards">
      <div className="design-header">
        <h1>Home Interior Design</h1>
        <p>
          Explore our collection of curated interior design ideas to give your home a fresh look.
          Discover inspiring and practical designs for kitchens, bedrooms, living rooms, and more.
          Our team of designers has created a variety of options to suit your preferences.
        </p>
      </div>
   
      <div className="container">
        <div className="card">
          <a href="email.html">
            <img src={kitchenImage} className="card-img-top" alt="Kitchen Design" />
          </a>
          <div className="card-content">
            <h3>Kitchen</h3>
          </div>
        </div>

        <div className="card">
          <a href="email.html">
            <img src={design2Image} className="card-img-top" alt="Master Bedroom Design" />
          </a>
          <div className="card-content">
            <h3>Master Bedroom</h3>
          </div>
        </div>

        <div className="card">
          <a href="email.html">
            <img src={design3Image} className="card-img-top" alt="Living Room Design" />
          </a>
          <div className="card-content">
            <h3>Living Room</h3>
          </div>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="card">
          <a href="email.html">
            <img src={design4Image} className="card-img-top" alt="Kitchen Design" />
          </a>
          <div className="card-content">
            <h3>Kitchen</h3>
          </div>
        </div>

        <div className="card">
          <a href="email.html">
            <img src={design5Image} className="card-img-top" alt="Puja Room Design" />
          </a>
          <div className="card-content">
            <h3>Puja Room</h3>
          </div>
        </div>

        <div className="card">
          <img src={design6Image} className="card-img-top" alt="Living Room Design" />
          <div className="card-content">
            <h3>Living Room</h3>
          </div>
        </div>
      </div>
    </div>
       </div>
  );
};

const DesignCards1 = () => {
  return (
    <div>
      <Navbar />
   <Navbar2/>
      <DesignCards2/>
    
     < Footer/>
    </div>
  );
};

export default DesignCards1;
