import React from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../Util/firebase';

const Login = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div className="row">
      <div className="col-md-6 px-5">
        <h2 className="text-center mt-5">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>

          <hr />
          <button type="button" className='btn btn-success btn-large w-100 mt-5' onClick={logGoogleUser}><i className="bi bi-google mx-2"></i>Login with Google</button>
        </form>
      </div>
      <div className="col-md-6 border-start px-5">
        <h2 className="text-center mt-5">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;