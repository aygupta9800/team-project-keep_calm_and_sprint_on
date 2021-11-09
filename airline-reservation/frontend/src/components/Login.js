import React from 'react';
// import { useSelector } from 'react-redux';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import { ColorButton2 } from '../constants/index';
import '../components/styles.css';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'



const Login = () => {

  const paperStyle={padding :20,height:'70vh',width:360, margin:"20px auto"}
  
  return (
    <div>
      <LandingNavbar  />
      <div className="landingpage">
        
      <Grid>
                <Grid align='center'>
                <Avatar src="/broken-image.jpg" />
                    <h2 style={{fontSize:'35px'}}>Login</h2>
                </Grid>
                <TextField label='Username' variant="outlined" placeholder='Enter username' fullWidth required style={{margin:'20px auto', background:'white'}}/>
                <TextField label='Password' variant="outlined" placeholder='Enter password' type='password' fullWidth required style={{margin:'20px auto', background:'white'}}/>
                
             <ColorButton2
            variant='contained'
            onClick={() => {
            }}
            style={{ height: '55px', alignSelf: 'center',margin:'20px auto'}}
          >
            Login
          </ColorButton2>
                
            
        </Grid>

     
          </div>
    </div>
  );
};

export default Login;