import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './components';
import Signup from './components/Signup';
import Login from './components/Login';
import SearchFlights from './components/SearchFlights';
import FlightDetails from './components/FlightDetails';

import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SearchFlights" component={SearchFlights} />
      <Route exact path="/FlightDetails" component={FlightDetails} />
    </>
  );
}

export default App;
