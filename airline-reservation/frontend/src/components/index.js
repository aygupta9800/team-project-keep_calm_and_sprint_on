import React from 'react';
// import { useSelector } from 'react-redux';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';

const Home = () => {
//   const loginDetails = useSelector((state) => state.login.user);
//   const signInDetails = useSelector((state) => state.signIn.user);
//   const userType = loginDetails.userType || signInDetails.userType;
  return (
    <div>
      <LandingNavbar  />
      <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: '100vh'}}>This is Landing page</h1>
    </div>
  );
};

export default Home;