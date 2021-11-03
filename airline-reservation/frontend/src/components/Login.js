import React from 'react';
// import { useSelector } from 'react-redux';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';

const Login = () => {
  return (
    <div>
      <LandingNavbar  />
      <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: '100vh'}}>This is Login component</h1>
    </div>
  );
};

export default Login;