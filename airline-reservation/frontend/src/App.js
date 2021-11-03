import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './components';
import Signup from './components/Signup';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Login" component={Login} />
    </>
  );
}

export default App;
