import React from 'react';
import Navbar1 from './Navbar1.jsx';
import Navbar2 from './Navbar2.jsx';
import Slides from './Slides.jsx'; // Corrected path
import CardComponent from './Cards.jsx'; // Corrected path
import { Carousel, ImageContainer } from './cards2.jsx'; // Corrected path
import Footer from './Footer.jsx'; // Corrected path



function Main() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Slides />
      <CardComponent />
      <Carousel /> 
      <ImageContainer /> 
      <Footer />
     

      
    </div>
  );
}

export default Main;
