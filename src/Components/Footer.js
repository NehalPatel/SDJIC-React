import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
          <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Cool stuff</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Random feature</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Team feature</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Stuff for developers</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Another one</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource name</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Another resource</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Pages</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">Home</Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/about">About</Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/contact">Contact</Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
