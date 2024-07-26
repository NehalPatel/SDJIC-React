import React from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';

const UserAuth = () => {

  return (
    <div className="row">
      <div className="col-md-6 px-5">
        <h2 className="text-center mt-5">Login</h2>
        <SignIn />

      </div>
      <div className="col-md-6 border-start px-5">
        <h2 className="text-center mt-5">Register</h2>
        <SignUp />
      </div>
    </div>
  );
};

export default UserAuth;