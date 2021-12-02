import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button
} from '@material-ui/core';
import { ColorButton4 } from '../../constants/index';
import logo from '../../images/icon.svg';
import './LandingNavbar.css';

const LandingNavbar = (props) => {
  const history = useHistory();

  return (
    <div>
      <Box component='nav'>
        <AppBar position='fixed' className='appbar'>
          <Toolbar className='toolbar'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '40px', fontWeight: 'bold', color: 'orange', fontFamily: 'auto'}}>United</span>
                <img src={logo} style={{cursor: 'pointer'}} width='120' height='80' alt='' onClick={() => {history.push('/');}}/>
            </div>
            <div>
            <Button
              variant='contained'
              onClick={() => {
                history.push('/Login');
              }}
              style={{marginRight: '20px'}}
            >
              Login
            </Button>
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
