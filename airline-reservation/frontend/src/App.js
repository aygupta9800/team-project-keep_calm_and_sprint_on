import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './components';
import Signup from './components/Signup';
import Login from './components/Login';
import SearchFlights from './components/SearchFlights';
import FlightDetails from './components/FlightDetails';
import ViewBookings from './components/Bookings/ViewBookings';
import ViewFlights from './components/Bookings/ViewFlights';
import CustomerProfile from './components/Profile/CustomerProfile';
import EmployeeProfile from './components/Profile/EmployeeProfile';
import Airline from './components/Airline';

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
      <Route exact path="/Airline" component={Airline} />
      <Route exact path="/CustomerProfile" component={CustomerProfile} />
      <Route exact path="/EmployeeProfile" component={EmployeeProfile} />
      <Route exact path="/Bookings" component={ViewBookings} />
      <Route exact path="/ViewFlights" component={ViewFlights} />
    </>
  );
}

export default App;
