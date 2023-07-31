import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/contact">Contact</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/about">About</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/react">React</Link>
      <Link className="py-2 text-dark text-decoration-none" to="/login">Login</Link>
    </nav>
  );
};

export default Navigation;
