import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MobileeRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItemIcon,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Box
} from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../images/icon.svg';
import { logout } from '../../state/action-creators/loginActions.js';
import '../LandingNavbar/LandingNavbar.css';
import { getUserDetails, updateProfile } from "../../state/action-creators/profileAction";
import { getAllBookings } from '../../state/action-creators/bookingAction';

// CSS styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: '100%',
        minWidth: '250px',
        paddingTop: '64px',
        background: '#222',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        marginBottom: '4rem',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: '#fff'
    }
}));

const menuItems = [
    {
        listIcon: <LocalAirportIcon style={{color: 'orange'}} />,
        listText: 'Airline',
        listPath: '/Airline'
    },
    {
        listIcon: <PersonIcon style={{color: 'orange'}} />,
        listText: 'Profile',
        listPath: '/EmployeeProfile'
    },
    {
        listIcon: <ConfirmationNumberIcon style={{color: 'orange'}} />,
        listText: 'Bookings',
        listPath: '/Bookings'
    },
    {
        listIcon: <LogoutIcon style={{color: 'orange'}} />,
        listText: 'Logout',
        listPath: '/'
    },
]

const ApplicationCustomerNavbar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.login.userDetails.data);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [])

  const [state, setState] = useState({
      left: false
  })

  const toggleSlider = (slider, open) => () => {
      setState({...state, [slider]: open});
  };

  const sideList = slider => (
      <Box component='div'
          className={classes.menuSliderContainer}
          onClick={toggleSlider(slider, false)}
      >
          <Avatar className={classes.avatar} src={logo} alt='Employee' />
          <Divider />
          <List>
              {menuItems.map((listItem, key) => (
                  <ListItem button key={key} component={Link} onClick={() => {
                      if (listItem.listText === 'Logout') {
                          dispatch(logout(history));
                      }  if(listItem.listText === 'Profile')  {
                          dispatch(getUserDetails(userDetails._id));
                        }}} 
                  to={{pathname: listItem.listPath, state: {userType: 'employee'}}}>
                      <ListItemIcon className={classes.listItem}>{listItem.listIcon}</ListItemIcon>
                      <ListItemText className={classes.listItem} primary={listItem.listText} />
                  </ListItem>
              ))}
          </List>
      </Box>
  );

  return (
    <div>
      <Box component='nav'>
        <AppBar position='fixed' className='appbar'>
          <Toolbar className='toolbar'>
            <IconButton onClick={toggleSlider('left', true)}>
                <DehazeIcon style={{color: 'orange'}} />
            </IconButton>
            <MobileeRightMenuSlider open={state.left}
                onClose={toggleSlider('left', false)}
                anchor='left'>
                {sideList('left')}
            </MobileeRightMenuSlider>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '40px', fontWeight: 'bold', color: 'orange', fontFamily: 'auto'}}>United</span>
                <img src={logo} style={{cursor: 'pointer'}} width='120' height='80' alt='' />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
ApplicationCustomerNavbar.propTypes = {
  // ...prop type definitions here
  
};
export default ApplicationCustomerNavbar;
