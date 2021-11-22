import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { airports, ColorButton4 } from '../constants/index';
import { storeSearchParams, getFlightDetails } from '../state/action-creators/flightActions'
import Dropdown from '../constants/Dropdown.js';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import BasicDateRangePicker from '../constants/DatePicker';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  fields: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  picker: {
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '77%'
    },
  },
  title: {
    fontSize: '50px',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '35px',
    },
  },
  button: {
    height: '50px',
    alignSelf: 'center', 
    width: '20%',
    [theme.breakpoints.down('md')]: {
      width: '95%'
    },
  }
}));

const SearchFlights = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [from, setFromValue] = useState([]);
  const [to, setToValue] = useState([]);
  const [value, setValue] = useState([null, null]);
  console.log(value);
  return (
    <div>
      <LandingNavbar  />
      <div className='landingpage'>
        <h1 className={classes.title}>It's more than just a trip</h1>
        <div className={classes.fields}>
          <Dropdown valueString={from} setValueString={setFromValue} listItems={airports} label='From Where?' style={{width: '20%'}} />
          <Dropdown valueString={to} setValueString={setToValue} listItems={airports} label='Where to?' style={{width: '20%'}} />
          <BasicDateRangePicker value={value} setValue={setValue} className={classes.picker} />
          <ColorButton4
            variant='contained'
            onClick={async () => {
              dispatch(storeSearchParams({source: from, destination: to, dateTime: value}));
              await dispatch(getFlightDetails());
              history.push('/FlightDetails')
            }}
            className={classes.button}
          >
            Search
          </ColorButton4>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;