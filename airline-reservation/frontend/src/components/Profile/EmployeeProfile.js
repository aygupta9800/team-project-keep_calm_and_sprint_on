import React from 'react';
import {
    Grid
  } from '@material-ui/core';
  import CustomTextField from '../Input/CustomTextField';
  import { makeStyles } from '@material-ui/core/styles';
  import { ColorButton4 } from '../../constants/index';
import ApplicationEmployeeNavbar from '../ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
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

const EmployeeProfile = () => {
    const classes = useStyles();
    return (
        <div>
            <ApplicationEmployeeNavbar  />
            <div className="employeeProfile">
          <Grid className={classes.wrapper}>
          <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="firstName"
              variant="outlined"
              placeholder = "Full Name"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
            />

            <CustomTextField
              label="middleName"
              variant="outlined"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              placeholder = "Middle Name"
              fullWidth
              required
              
            />
            <CustomTextField
              label="lastName"
              variant="outlined"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              placeholder = "Last Name"
              fullWidth
              required
              
            />
            </div>

            <div style={{ display: "flex", justifyContent: 'space-between', width: '66%' }}>
            <CustomTextField
              label="suffix"
              variant="outlined"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              placeholder = "Suffix"
              fullWidth
              required
            />

            <CustomTextField
              label="dateOfBirth"
              variant="outlined"
              placeholder = "Date of birth"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              
            />
            
            </div>

            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="email"
              variant="outlined"
              placeholder="Email"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              
            />

            <CustomTextField
              label="phoneNumber"
              variant="outlined"
              placeholder ="Phone Number"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              
            />
            
            </div>
           
<h4> Emergency contact Information </h4>

<div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="firstName"
              variant="outlined"
              placeholder = "First Name"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              
            />

<CustomTextField
              label="lastName"
              variant="outlined"
              placeholder ="Last Name"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
            />            
            </div>

            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <CustomTextField
              label="email"
              placeholder = "Email"
              variant="outlined"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              
            />

<CustomTextField
              label="phoneNumber"
              variant="outlined"
              placeholder = "Phone Number"
              //placeholder={userType === 'employee' ? 'Employee Id' : 'Mileage Number'}
              fullWidth
              required
              
            />
            
            </div>
            <ColorButton4
              variant='contained'
             // onClick={(e) => { onLogIn(e); }}
              style={{ height: '50px', alignSelf: 'center', width: '100%', marginBottom: '10px'}}
            >
              Update
            </ColorButton4>
            </Grid>
          </div>
        </div>
    );
}

export default EmployeeProfile;