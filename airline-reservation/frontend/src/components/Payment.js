/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { ColorButton4 } from '../constants/index';
import { makeBooking, updateBooking } from '../state/action-creators/flightActions';
import ApplicationCustomerNavbar from './ApplicationCustomerNavbar/ApplicationCustomerNavbar';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px 20px 21px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 20px 0',
    },
  },
  gridClass: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  mobileButton: {
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },
  mobileWrapper: {
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },
  mobileWrapperAlt: {
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      marginTop: '20px',
    },
  },
}));

const Payment = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('')
  const [cardnumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')

  const bookingDetails = location.state;

  const [formState, setFormState] = useState({
    card: {
      error: false
    },
    cvv: {
      error: false
    }
  });

  const confirmBooking = () => {
    let seats
    if (!bookingDetails.isEdit) {
      seats = bookingDetails.flightDetails.seats.filter((item) => {
      return bookingDetails.seat.includes(item.seatNumber);
    });
    } else {
      seats = bookingDetails.seat.map((item) => {
      return {
        seatNumber: item,
        isBooked: false
      }
    });
    }
      const bookingData = {
        userId: bookingDetails.flightDetails.userId,
        flightId: bookingDetails.flightDetails.flightId,
        totalSeatNeeded: bookingDetails.totalSeats,
        mileagePointsToUse: bookingDetails.redeemPoints,
        totalPricePaid: bookingDetails.totalSeats * (bookingDetails.basePrice + (bookingDetails.cabinType === 'Economy' ? 0 : bookingDetails.cabinType === 'Business' ? 100 : 50)) - bookingDetails.redeemPoints,
        flightClass: bookingDetails.cabinType,
        identityNumber: bookingDetails.identityNumber,
        seats: seats
      }
      let isValidated = true;
      let cardNumberRegex = /^[0-9]{10}$/g; 
      let cvvRegex = /^[0-9]{3}$/g;

      let cardError = false;
      let cvvError = false;

      if (!cardnumber || (cardnumber && !cardnumber.toString().match(cardNumberRegex))) {
        cardError = true;
        isValidated = false;
      }

      if (!cvv || (cvv && !cvv.toString().match(cvvRegex))) {
        cvvError = true;
        isValidated = false;
      }
      if (!isValidated) {
        setFormState({...formState, 
          card: {
            error: cardError
          },
          cvv: {
            error: cvvError
          }
        })
      }
      if (isValidated) {
        if (!bookingDetails.isEdit) {
          dispatch(makeBooking(bookingData, history));
        } else {
          dispatch(updateBooking({...bookingData, bookingId: bookingDetails.flightDetails.bookingId}, history));
        }
      }
  }

  return (
    <div>
      <ApplicationCustomerNavbar  />
      <div style={{ margin: '8rem 1rem 4rem 1rem' }}>
        <div className={classes.header}>
          <h2 style={{ fontFamily: 'Galano Grotesque', alignSelf: 'center' }}>Checkout Page</h2>
          <hr />
        </div>
        <Grid
          className={classes.gridClass}
          container-fluid={1}
          style={{
            overflow: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div
            className={classes.mobileWrapper}
            style={{
              width: '45%', height: '100%', display: 'flex', flexDirection: 'column', background: 'white',
            }}
          >
            <label style={{ alignSelf: 'center' }}>Enter Payment Details</label>
            <br />
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <TextField
                        label='First Name'
                        variant='outlined'
                        style={{marginRight: '20px'}}
                        placeholder = 'Enter First Name'
                        fullWidth
                        required
                        onChange={(e) => {setFname(e.target.value)}}
                        value={fname}
                    />        
                    <TextField
                        label='Last Name'
                        variant='outlined'
                        style={{marginRight: '20px'}}
                        placeholder = 'Enter Last Name'
                        fullWidth
                        required
                        onChange={(e) => {setLname(e.target.value)}}
                        value={lname}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <TextField
                        label='Card Number'
                        variant='outlined'
                        style={{marginRight: '20px'}}
                        placeholder = 'Enter Card Number'
                        fullWidth
                        required
                        onChange={(e) => {setCardNumber(e.target.value)}}
                        value={cardnumber}
                        error={formState?.card?.error}
                        helperText={formState?.card?.error ? 'Please enter valid card number' : ''}
                    />        
                    <TextField
                        label='CVV'
                        variant='outlined'
                        style={{marginRight: '20px'}}
                        placeholder = 'CVV'
                        fullWidth
                        required
                        onChange={(e) => {setCvv(e.target.value)}}
                        value={cvv}
                        error={formState?.cvv?.error}
                        helperText={formState?.cvv?.error ? 'Please enter valid cvv number' : ''}
                    />
                </div>
            </div>
            <br />
          </div>
          <div
            className={classes.mobileWrapperAlt}
            style={{
              width: '45%', height: '100%', display: 'flex', flexDirection: 'column', background: '#e0e0e0',
            }}
          >
            <label style={{ alignSelf: 'center' }}>Proceed to checkout</label>
            <br />
            <div style={{ margin: '0 20px 0 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Toatal Seats:</p>
                <p>
                  {bookingDetails.totalSeats}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Base Price:</p>
                <p>{bookingDetails.basePrice}$</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Cabin Type:</p>
                <p>{bookingDetails.cabinType}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Cabin Price:</p>
                <p>{bookingDetails.cabinType === 'Economy' ? '0$' : bookingDetails.cabinType === 'Business' ? '100$' : '50$'}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Mileage Points redeemed:</p>
                <p>{bookingDetails.redeemPoints}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Total:</p>
                <p>
                  {bookingDetails.price - bookingDetails.redeemPoints}$
                </p>
              </div>
            </div>
            <ColorButton4
              variant='contained'
              color='primary'
              disabled={!fname || !lname || !cvv || !cardnumber}
              onClick={(e) => {
                confirmBooking();
              }}
              className={classes.button}
            >
              {' '}
              Confirm Booking
            </ColorButton4>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Payment;
