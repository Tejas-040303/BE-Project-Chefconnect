import React from 'react';
import '../../styles/ComponentsCss/Navbar.css'; // Import the CSS file

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid mx-5 px-3">
                <a className="navbar-brand" href="#">ChefConnect</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Chefs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Premium</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary ms-3">Login/Signup</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
