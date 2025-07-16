import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import { signOutUser } from '../Util/firebase';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const displayName = currentUser?.displayName || "User";

  const logout = async () => {
    await signOutUser();
    console.log(currentUser);
  }

  return (
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/contact">Contact</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/about">About</Link>
      <Link className="me-3 py-2 text-dark text-decoration-none" to="/react">React</Link>
      {currentUser ? (
        <div className="py-2 nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {displayName}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" onClick={logout}>Logout</a></li>
          </ul>
        </div>
      ) : (
        <Link className="py-2 text-dark text-decoration-none" to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navigation;
