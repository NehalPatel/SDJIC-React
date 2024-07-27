import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import { signOutUser } from '../Util/firebase';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/contact">Contact</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/about">About</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/react">React</Link>
      {currentUser ? (
        <span className="me-3 py-2 text-dark text-decoration-none" onClick={signOutHandler}>Logout</span>
      ) : (
        <Link className="py-2 text-dark text-decoration-none" to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navigation;
