import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ColorButton2, ColorButton4 } from '../constants/index';
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
  const [from, setFromValue] = useState([]);
  const [to, setToValue] = useState([]);
  const [value, setValue] = useState([null, null]);
  const countries = [
    'USA',
    'India',
    'Russia',
    'Canada',
    'Germany',
    'Australia'
  ]
  console.log(value);
  return (
    <div>
      <LandingNavbar  />
      <div className='landingpage'>
        <h1 className={classes.title}>It's more than just a trip</h1>
        <div className={classes.fields}>
          <Dropdown valueString={from} setValueString={setFromValue} listItems={countries} label='From Where?' style={{width: '20%'}} />
          <Dropdown valueString={to} setValueString={setToValue} listItems={countries} label='Where to?' style={{width: '20%'}} />
          <BasicDateRangePicker value={value} setValue={setValue} className={classes.picker} />
          <ColorButton2
            variant='contained'
            onClick={() => {
              history.push('/FlightDetails')
            }}
            className={classes.button}
          >
            Search
          </ColorButton2>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;