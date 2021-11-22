import React from 'react';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import SearchFlights from './SearchFlights.js';
import './styles.css';

const Home = () => {
  return (
    <div>
      <LandingNavbar  />
      <div className='landingpage'>
        <SearchFlights />
      </div>
    </div>
  );
};

export default Home;