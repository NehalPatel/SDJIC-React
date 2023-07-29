import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">SDJIC</span>
      </Link>

      <Navigation />
    </div>
  </header>
  );
};

export default Header;
