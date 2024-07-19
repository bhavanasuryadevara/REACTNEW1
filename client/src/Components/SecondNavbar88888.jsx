import React from 'react';

function SecondNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary Second">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerSecond" aria-controls="navbarTogglerSecond" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerSecond">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    How it Works
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dropdown Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown Item 2</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown Item 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Offerings
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dropdown Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown Item 2</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown Item 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Price Calculator
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dropdown Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown Item 2</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown Item 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">The Modular Journey</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Refer a Friend</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Partner with Us</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-danger">CONSULT ONLINE NOW</button>
                </div>
            </div>
        </nav>
    );
}

export default SecondNavbar;
