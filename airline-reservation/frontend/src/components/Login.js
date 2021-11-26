import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import { ColorButton4 } from '../constants/index'
import { userLogin } from '../state/action-creators/loginActions.js';
//import { employeeLogin, customerLogin } from '../state/action-creators/loginActions.js';
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

const Login = () => {
  const classes = useStyles();
  const [userType, setUserType] = useState('employee');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnChangeUserId = (event) => {
    setUserId(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onLogIn = () => {
      dispatch(userLogin({ identifier : userId, password, userType }, history));
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
              label='UserId'
              variant="outlined"
              placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              value={userId}
              onChange={(e) => {
                handleOnChangeUserId(e);
              }}
              style={{margin:'20px auto', background:'white'}}
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
              Login
            </ColorButton4>
            <a href="/Signup" className='loginAnchor'>New user? Register Here</a>
            </Grid>
          </div>
    </div>
  );
};

export default Login;