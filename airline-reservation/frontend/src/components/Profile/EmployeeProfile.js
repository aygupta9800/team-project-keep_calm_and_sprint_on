import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    Grid
  } from '@material-ui/core';
import CustomTextField from '../Input/CustomTextField';
import { makeStyles } from '@material-ui/core/styles';
import { ColorButton4 } from '../../constants/index';
import ApplicationEmployeeNavbar from '../ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
import { updateProfile } from '../../state/action-creators/profileAction';
import '../styles.css';

const useStyles = makeStyles((theme) => ({
    wrapper: {
      background: 'white',
      padding: '20px',
      margin: '10px',
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        width: '95%',
      },
    }
  }));


//can send in props all the data and then use it here
// and initialize using props. 

// or use redux using use selector

export default function EmployeeProfile(){
    const classes = useStyles();
    const dispatch = useDispatch();

    const fullNameRef = useRef();
    const dobRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressline1Ref = useRef();
    const  cityRef= useRef();
    const stateRef = useRef();
    const countryRef = useRef();
    //const zipcodeRef = useRef();


    function handleUpdateProfile(){
      const userProfile = {
        userName: fullNameRef.current.value,
        dob: dobRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneRef.current.value,
        address: {
          addressline1: addressline1Ref.current.value,
          city: cityRef.current.value,
          state: stateRef.current.value,
          country: countryRef.current.value,
          //zipcode: zipcodeRef.current.value,
        }
      }
      dispatch(updateProfile(userProfile));
    }
    return (
        <div>
          <ApplicationEmployeeNavbar  />
          <div className="employeeProfile">
          <Grid className={classes.wrapper}>
            <div>
          <h3> Passanger Information (Adult) </h3>
          <p>Enter the required information for each traveller<br/> and be sure it matches exactly to 
            the government<br/> issued ID presented at the airport. </p>
          </div>
          <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="firstName"
              variant="outlined"
              placeholder = "Full Name"
              fullWidth
              required
              inputRef={fullNameRef}
            />        
            <CustomTextField
              label="dateOfBirth"
              variant="outlined"
              placeholder = "Date of birth"
              fullWidth
              required
              inputRef={dobRef}
            />
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="email"
              variant="outlined"
              placeholder="Email"
              fullWidth
              required
              inputRef={emailRef}
            />

            <CustomTextField
              label="phoneNumber"
              variant="outlined"
              placeholder ="Phone Number"
              fullWidth
              required
              inputRef={phoneRef}
            />
            </div>
            <h4> Address Information </h4>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="addressline1"
              variant="outlined"
              placeholder = "Address"
              fullWidth
              required
              inputRef={addressline1Ref}
            />

            <CustomTextField
              label="city"
              variant="outlined"
              placeholder ="City"
              fullWidth
              required
              inputRef={cityRef}
            />            
            </div>

            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="state"
              placeholder = "State"
              variant="outlined"
              fullWidth
              required
              inputRef={stateRef}
            />
            <CustomTextField
              label="country"
              variant="outlined"
              placeholder = "Country"
              fullWidth
              required
              inputRef={countryRef}
            />
            </div>
            <div>
            <h3> Bag Information </h3>
            <p>Each passanger is allowed one free carry-on bag and one personal item. <br/>First checked bag for each customer is also free. <br/>Second bag checked free is waived for loyalty program members.</p>
            <br/>
            </div>
            <ColorButton4
              variant='contained'
              style={{ height: '50px', alignSelf: 'center', width: '100%', marginBottom: '10px'}}
              onClick={handleUpdateProfile}
            >
              Update
            </ColorButton4>
            </Grid>
          </div>
        </div>
    );
}