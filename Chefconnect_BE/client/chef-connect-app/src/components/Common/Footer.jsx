import React from 'react';
import '../../styles/ComponentsCss/Footer.css';  // Add your custom footer CSS here

function Footer() {
  return (
    <div className="footer-container">
      <div className="container-fluid bg-body">
        <footer className="row py-2 my-2 border-top">
          <div className="col-3">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none"></a>
            <p className="text-muted">© 2022</p>
          </div>

          <div className="col-3">
            {/* Add any content here if needed */}
          </div>

          <div className="col-6">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
