import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Box,
} from '@material-ui/core';
import { ColorButton2, ColorButton4 } from '../../constants/index';
import logo from '../../images/airline.svg';
import './LandingNavbar.css';

// CSS styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    marginBottom: '4rem',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const LandingNavbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div>
      <Box component='nav'>
        <AppBar position='fixed' className='appbar'>
          <Toolbar className='toolbar'>
            <img src={logo} style={{cursor: 'pointer'}} width='120' height='80' alt='' onClick={() => {history.push('/');}}/>
            <div>
            <ColorButton2
              variant='contained'
              onClick={() => {
                history.push('/Login');
              }}
              style={{marginRight: '20px'}}
            >
              Login
            </ColorButton2>
            <ColorButton4
              variant='contained'
              onClick={() => {
                history.push('/Signup');
              }}
            >
              Sign up
            </ColorButton4>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
LandingNavbar.propTypes = {
  // ...prop type definitions here
  
};
export default LandingNavbar;
