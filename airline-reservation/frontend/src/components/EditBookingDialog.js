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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
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
      background: 'orange',
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

const EditBookingDialog = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const userDetails = useSelector((state) => state.login.userDetails.data);
  const [price, setPrice] = useState(props.flightDetails.totalPricePaid);
  const [totalSeats, setTotalSeats] = useState(props.flightDetails.seatNumbers);
  const [cabinType, setCabinType] = useState(props.flightDetails.flightClass);
  const [redeemPoints, setRedeemPoints] = useState(0)
  const [identityNumber, setIdentityNumber] = useState(props.flightDetails.identityNumber);
  const [seat, setSeat] = useState(props.flightDetails.seats || []);

  const [formState, setFormState] = useState({
    seat: {
      error: false
    },
    identity: {
      error: false
    },
    windowSeat: {
      error: false
    },
    mileagePoints: {
      error: false
    }
  })

  useEffect(() => {
    setPrice(props.flightDetails.totalPricePaid);
    setTotalSeats(props.flightDetails.seatNumbers);
    setCabinType(props.flightDetails.flightClass);
    setIdentityNumber(props.flightDetails.identityNumber);
    setSeat(props.flightDetails.seats);
  }, [props.seats, props.flightDetails])

  const onBookClick = () => {
    let isValidated = true;
    let identityNumberRegex = /^[0-9]{10}$/g; 
    let seatError = false;
    let identityError = false;
    let windowSeatError = false;
    let mileagePointsError = false;
    if (totalSeats < 0) {
      seatError = true;
      isValidated = false;
    }
    if (!identityNumber || (identityNumber && !identityNumber.toString().match(identityNumberRegex))) {
      identityError = true;
      isValidated = false;
    }
    if (seat.length !== parseInt(totalSeats)) {
      windowSeatError = true;
      isValidated = false;
    }
    if (redeemPoints > 100 || redeemPoints > userDetails.mileagePoints) {
      mileagePointsError = true;
      isValidated = false;
    }
    if (!isValidated) {
      setFormState({...formState, 
        seat: {
          error: seatError
        },
        identity: {
          error: identityError
        },
        windowSeat: {
          error: windowSeatError
        },
        mileagePoints: {
          error: mileagePointsError
        }
      })
    }
    if (isValidated) {
      history.push({ 
        pathname: '/Payment', 
        state: {
          flightDetails: props.flightDetails,
          price,
          basePrice: props.flightDetails.price,
          totalSeats,
          cabinType,
          identityNumber: parseInt(identityNumber),
          redeemPoints,
          seat,
          isEdit: true
        } 
      });
    }
  }

  const onClose = () => {
    setFormState({
      seat: {
        error: false
      },
      identity: {
        error: false
      },
      windowSeat: {
        error: false
      },
      mileagePoints: {
        error: false
      }
    })
    props.handleClose();
  }

  return (
    <Dialog open={props.open} onClose={() => { onClose(); }} aria-labelledby="form-dialog-title" fullWidth
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
              disabled
              required
              type="number"
              InputProps={{ inputProps: { min: '1', step: '1' } }}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  seat: {
                    ...formState.seat,
                    error: false
                  }
                });
                setPrice((props.flightDetails.price + (cabinType === 'Business' ? 100 : cabinType === 'FirstClass' ? 50 : 0)) * totalSeats);
              }}
              value={totalSeats}
              error={formState?.seat?.error}
              helperText={formState?.seat?.error ? 'Please select from the list' : ''}
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
              onChange={(e) => {
                  setCabinType(e.target.value);
                if (e.target.value === 'Economy') {
                  setPrice((props.flightDetails.price + 0) * totalSeats) ;
                }
                if (e.target.value === 'Business') {
                  setPrice((props.flightDetails.price + 100) * totalSeats) ;
                } else if (e.target.value === 'FirstClass') {
                  setPrice((props.flightDetails.price + 50) * totalSeats);
                }
              }}
              select
            >
                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="FirstClass">First Class</MenuItem>
            </TextField>        
            <TextField
              label="Government Id"
              variant="outlined"
              placeholder = "Enter Government Id Number"
              fullWidth
              required
              disabled
              onChange={(e) => {
                setFormState({
                  ...formState,
                  identity: {
                    ...formState.identity,
                    error: false
                  }
                });
                setIdentityNumber(e.target.value)
              }}
              value={identityNumber}
              error={formState?.identity?.error}
              helperText={formState?.identity?.error ? 'Please select 10 digit number' : ''}
            />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
            {<FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label" style={{paddingLeft: '5px'}}>Select Window Seats<span style={{color: 'red', alignSelf: 'baseline', marginLeft: '10px'}}>*</span></InputLabel>
                    <Select
                        error={formState?.windowSeat?.error}
                        classes={{ root: classes.selectRoot }}
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        disabled
                        value={seat}
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
                        {seat && seat.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, seat, theme)}>
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText style={{color: 'red'}}>{formState?.windowSeat?.error ? 'Please select same number as selected seat' : ''}</FormHelperText>
            </FormControl>}
        </div>
        
      </DialogContent>
      <DialogActions>
        <ColorButton3 variant="contained" color="primary" onClick={onBookClick}>
          Book Flight
        </ColorButton3>
      </DialogActions>
    </Dialog>
  );
};

EditBookingDialog.propTypes = {
  // ...prop type definitions here
  open: PropTypes.bool,
  seats: PropTypes.array,
  flightDetails: PropTypes.object,
  handleClose: PropTypes.func,
};

export default EditBookingDialog;
