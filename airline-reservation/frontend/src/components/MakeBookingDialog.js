/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ColorButton3 } from '../constants/index';

// styles for the drop downs and chips
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
      backgroundColor: 'white'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
      background: 'cadetblue',
      color: 'white',
      fontWeight: 'bold',
      textShadow: '1px 1px black'
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    selectRoot: {
      '&:focus':{
         backgroundColor:'white'
      }
    }
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  function getStyles(name, selectedSkills, theme) {
    return {
      fontWeight:
        selectedSkills.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const MakeBookingDialog = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const userDetails = useSelector((state) => state.login.userDetails.data);
  const [price, setPrice] = useState(props.flightDetails.price);
  const [totalSeats, setTotalSeats] = useState(1);
  const [cabinType, setCabinType] = useState('Economy');
  const [redeemPoints, setRedeemPoints] = useState(0)
  const [identityNumber, setIdentityNumber] = useState('');
  const [seat, setSeat] = useState([]);
  const [windowChecked, setWindowChecked] = useState(true);
  const [aisleChecked, setAisleChecked] = useState(false);

  const [aisleSeats, setAisleSeats] = useState([]);
  const [windowSeats, setWindowSeats] = useState([]);

  const handleWindowChange = (event) => {
    setWindowChecked(event.target.checked);
    setSeat([]);
    if (event.target.checked) {
      setAisleChecked(false);
    } else {
      setAisleChecked(true);
    }
   
  };

  const handleAisleChange = (event) => {
    setAisleChecked(event.target.checked);
    setSeat([]);
    if (event.target.checked) {
      setWindowChecked(false);
    } else {
      setWindowChecked(true);
    }
  };

  useEffect(() => {
    const aisleSeats = [];
    const windowSeats = [];
    setPrice(props.flightDetails.price);
    if(props.flightDetails.seats) {
        props.flightDetails.seats.forEach((item) => {
            if (((item.seatNumber.includes('1') || item.seatNumber.includes('4')) && !item.isBooked)) {
                windowSeats.push(item.seatNumber);
            } else if (((item.seatNumber.includes('2') || item.seatNumber.includes('3')) && !item.isBooked)) {
                aisleSeats.push(item.seatNumber)
            }
        });
        setAisleSeats(aisleSeats);
        setWindowSeats(windowSeats);
    }
  }, [props.flightDetails])

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" fullWidth
    maxWidth="md" >
      <DialogTitle id="form-dialog-title">Fill the details and Complete Booking</DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px' }}>
            <TextField
              label="Flight Duration"
              variant="outlined"
              style={{marginRight: '20px'}}
              placeholder = "Flight Duration"
              fullWidth
              disabled
              required
              value={props.flightDetails.duration}
            />        
            <TextField
              label="Flight Timings"
              variant="outlined"
              placeholder = "Flight Timings"
              fullWidth
              required
              disabled
              value={props.flightDetails.timings}
            />
        </div>

        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
            <TextField
              label="Source"
              variant="outlined"
              style={{marginRight: '20px'}}
              placeholder = "Source"
              fullWidth
              disabled
              required
              value={props.flightDetails.origin}
            />        
            <TextField
              label="Destination"
              variant="outlined"
              placeholder = "Destination"
              fullWidth
              required
              disabled
              value={props.flightDetails.destination}
            />
        </div>

        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
            <TextField
              label="Price"
              variant="outlined"
              placeholder = "Price"
              style={{marginRight: '20px'}}
              fullWidth
              disabled
              required
              value={price}
            />        
            <TextField
              label="Total Seats"
              variant="outlined"
              placeholder = "Total Seats"
              fullWidth
              required
              type="number"
              InputProps={{ inputProps: { min: '1', step: '1' } }}
              onChange={(e) => {setTotalSeats(e.target.value)}}
              value={totalSeats}
            />
        </div>

        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
            <TextField
              label="Select Cabin Type"
              variant="outlined"
              placeholder = "Select Cabin Type"
              style={{marginRight: '20px'}}
              fullWidth
              required
              value={cabinType}
              onChange={(e) => setCabinType(e.target.value)}
              select
            >
                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="FirstClass">First Class</MenuItem>
            </TextField>        
            <TextField
              label="Passport"
              variant="outlined"
              placeholder = "Enter Passport Number"
              fullWidth
              required
              onChange={(e) => {setIdentityNumber(e.target.value)}}
              value={identityNumber}
            />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-around', padding: '20px'  }}>
            <FormControlLabel control={<Checkbox checked={windowChecked} onChange={(e) => { handleWindowChange(e); }} />} label="Show Window Seats" />
            <FormControlLabel control={<Checkbox checked={aisleChecked} onChange={(e) => { handleAisleChange(e); }} />} label="Show Aisle Seats" />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
            {/* {aisleChecked && <TextField
              label="Select Seats"
              variant="outlined"
              style={{marginRight: '20px'}}
              placeholder = "Select Seats"
              fullWidth
              required
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              select
            >
                {aisleSeats.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </TextField>} */}
            {aisleChecked && <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label" style={{paddingLeft: '5px'}}>Select Window Seats<span style={{color: 'red', alignSelf: 'baseline', marginLeft: '10px'}}>*</span></InputLabel>
                    <Select
                        classes={{ root: classes.selectRoot }}
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={seat}
                        onChange={(e) => setSeat(e.target.value)}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                        {aisleSeats.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, seat, theme)}>
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>}
            {/* {windowChecked && <TextField
              label="Select Seats"
              variant="outlined"
              style={{marginRight: '20px'}}
              placeholder = "Select Seats"
              fullWidth
              required
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              select
            >
                {windowSeats.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </TextField>} */}
            {windowChecked && <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label" style={{paddingLeft: '5px'}}>Select Window Seats<span style={{color: 'red', alignSelf: 'baseline', marginLeft: '10px'}}>*</span></InputLabel>
                    <Select
                        classes={{ root: classes.selectRoot }}
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={seat}
                        onChange={(e) => setSeat(e.target.value)}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                        {windowSeats.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, seat, theme)}>
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>}
            {userDetails.mileagePoints > 0 && <TextField
              label="Mileage points"
              variant="outlined"
              placeholder = "Enter Mileage points to redeem"
              fullWidth
              required
              type='number'
              InputProps={{ inputProps: { max: '100' } }}
              onChange={(e) => { setRedeemPoints(); }}
              value={redeemPoints}
            />}
        </div>
        
      </DialogContent>
      <DialogActions>
        <ColorButton3 variant="contained" color="primary" onClick={(e) => { history.push({ pathname: '/Payment', state: {
            flightDetails: props.flightDetails,
            price,
            totalSeats,
            cabinType,
            identityNumber,
            redeemPoints,
            seat
            } }); }}>
          Book Flight
        </ColorButton3>
      </DialogActions>
    </Dialog>
  );
};

MakeBookingDialog.propTypes = {
  // ...prop type definitions here
  open: PropTypes.bool,
  flightDetails: PropTypes.object,
  handleClose: PropTypes.func,
};

export default MakeBookingDialog;
