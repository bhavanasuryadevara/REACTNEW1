import React from 'react';
import './Navbar2css.css';
//import image from './Images/Image.png';
 
 function Navbar2() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                         <a className="nav-link" href="./DesignCards">  How it Works
</a>
                        </li>
                            
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Offerings

                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./KitchenDesigns">Modular Interiors</a></li>
                                <li><a className="dropdown-item" href="#">Full Home Interiors</a></li>
                                <li><a className="dropdown-item" href="#">Luxury interiors</a></li>
                                
                            </ul>
                        </li>

                        

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Price Calculator

                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/CarouselPrice">Home Interior Price Calculator</a></li>
                                <li><a className="dropdown-item" href="#">Kitchen Price Calculator</a></li>
                                <li><a className="dropdown-item" href="#">Wardrobe Price Calculator</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Mod">The Modular Journey</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Referafrend">Refer a Friend</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Partner with Us</a>
                        </li>
 
                    </ul>
                                 
<div className="text-end">
<button type="button" className="btn btn-danger">CONSULT ONLINE NOW</button>

</div>
                   
</div>
</div>
</nav>
);
}

export default Navbar2;


