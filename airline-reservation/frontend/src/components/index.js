import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ColorButton2, ColorButton4 } from '../constants/index';
import Dropdown from '../constants/Dropdown.js';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  fields: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'initial',
    },
  },
  title: {
    fontSize: '50px',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '35px',
    },
  }
}));

const Home = () => {
  const classes = useStyles();
//   const loginDetails = useSelector((state) => state.login.user);
//   const signInDetails = useSelector((state) => state.signIn.user);
//   const userType = loginDetails.userType || signInDetails.userType;
  const [from, setFromValue] = useState([]);
  const [to, setToValue] = useState([]);
  const countries = [
    'USA',
    'India',
    'Russia',
    'Canada',
    'Germany',
    'Australia'
  ]
  return (
    <div>
      <LandingNavbar  />
      <div className='landingpage'>
        <h1 className={classes.title}>It's more than just a trip</h1>
        <div className={classes.fields}>
          <Dropdown valueString={from} setValueString={setFromValue} listItems={countries} label='From Where?' />
          <Dropdown valueString={to} setValueString={setToValue} listItems={countries} label='Where to?' />
          <ColorButton2
            variant='contained'
            onClick={() => {
              //
            }}
            style={{ height: '55px', alignSelf: 'center' }}
          >
            Search
          </ColorButton2>
        </div>
      </div>
    </div>
  );
};

export default Home;