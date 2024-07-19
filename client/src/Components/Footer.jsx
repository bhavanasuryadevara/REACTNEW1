import React from 'react';
import logo from './Images/Image.png'
import './Footercss.css'
const Footer = () => {
  return (
    <footer>
      <div className="container11">
        <div className="row">
          <div className="col">
          <img src={logo} className="card-img-top" alt="Modular Interiors" />
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <p>Email: care@livspace.com<br />Phone: 123-456-7890</p>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <p>Connect with us on social media:</p>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;