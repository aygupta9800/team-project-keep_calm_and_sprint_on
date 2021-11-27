import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import { ColorButton4 } from '../constants/index'
import { userSignup } from '../state/action-creators/loginActions.js';

import {
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
import '../components/styles.css';

// CSS styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: 'white',
    padding: '20px',
    margin: '10px',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  }
}));

const Signup = () => {
  const classes = useStyles();
  const [userType, setUserType] = useState('employee');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onLogIn = () => {
    if (userType === 'employee') {
     // history.push({pathname: '/Airline', state: {userType: 'Employee'} });
      dispatch(userSignup({ email , password, userName, userType }, history));
    } else {
     // history.push({pathname: '/Airline', state: {userType: 'Customer'} });
      dispatch(userSignup({ email, password, userName, userType }, history));
    }
  };

  return (
    <div>
      <LandingNavbar  />
        <div className="landingpage">
          <Grid className={classes.wrapper}>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="user" name="row-radio-buttons-group" value={userType} onChange={(e) => { setUserType(e.target.value); }}>
                <FormControlLabel value="user" control={<Radio />} label="Customer" />
                <FormControlLabel value="employee" control={<Radio />} label="Employee" />
              </RadioGroup>
            </FormControl>
            <TextField
              label='User Name'
              variant="outlined"
              placeholder={'User Name'}
              fullWidth
              required
              value={userName}
              onChange={(e) => {
                handleOnChangeUserName(e);
              }}
              style={{margin:'20px auto', background:'white'}}
            />
            <TextField
                placeholder="Enter Email Id"
                value={email}
                onChange={(e) => {
                  handleOnChangeEmail(e);
                }}
                required
                label="Email"
                variant="outlined"
                fullWidth
              />
            <TextField
              label='Password'
              variant="outlined"
              placeholder='Enter password'
              type='password'
              fullWidth
              required
              value={password}
              onChange={(e) => {
                handleOnChangePassword(e);
              }}
              style={{margin:'20px auto', background:'white'}}
            />
            <ColorButton4
              variant='contained'
              onClick={(e) => { onLogIn(e); }}
              style={{ height: '50px', alignSelf: 'center', width: '100%', marginBottom: '10px'}}
            >
              Signup
            </ColorButton4>
            <a href="/Login" className='loginAnchor'>Existing user? Login Here</a>
            </Grid>
          </div>
    </div>
  );
};

export default Signup;