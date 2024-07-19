import React from 'react';
import './Navbar1css.css';
import image from './Images/Image.png';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand1" href="#">
                <img src={image} alt="Logo" />


                </a>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                         <a className="nav-link" href="./DesignCards">Interiors</a>
                        </li>
                            
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Design ideas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./KitchenDesigns">Modular Kitchen Designs</a></li>
                                <li><a className="dropdown-item" href="#">Wardrobe Designs</a></li>
                                <li><a className="dropdown-item" href="#">Bathroom Designs</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Magazine
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Latest Trends</a></li>
                                <li><a className="dropdown-item" href="#">Home Decor</a></li>
                                <li><a className="dropdown-item" href="#">Expert Tips</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cities
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/Store">New York</a></li>
                                <li><a className="dropdown-item" href="#">London</a></li>
                                <li><a className="dropdown-item" href="#">Tokyo</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="./Store">Store Locator</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             More
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/Store">Commercial Interiors</a></li>
                                <li><a className="dropdown-item" href="#">Own A Franchise</a></li>
                                <li><a className="dropdown-item" href="#">Press</a></li>
                                <li><a className="dropdown-item" href="#">Careers</a></li>

                            </ul>
                        </li> 
                    </ul>
                                 
<div class="text-end">
    <a href='/Login' class="btn btn-outline-primary">Login</a>
</div>
                   
</div>
</div>
</nav>
    );
}

export default Navbar;



