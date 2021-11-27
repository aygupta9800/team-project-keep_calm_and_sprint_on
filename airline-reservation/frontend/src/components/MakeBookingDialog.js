/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// import { updateRestaurant } from '../../state/action-creators/loginActions';
import { ColorButton3 } from '../constants/index';

const AddEditProfile = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
//   const [restaurantName, setRestaurantName] = useState(userDetails.name);
//   const [fromHrs, setFromHrs] = useState(userDetails.fromHrs);
//   const [toHrs, setToHrs] = useState(userDetails.toHrs);
//   const [country, setCountry] = useState(userDetails.country);
//   const [state, setState] = useState(userDetails.state);
//   const [pinCode, setPinCode] = useState(userDetails.pinCode);
//   const [city, setCity] = useState(userDetails.city);
//   const [phone, setPhone] = useState(userDetails.phone);
//   const [mode, setMode] = useState(userDetails.Mode);
//   const [restaurantDescription, setRestaurantDescription] = useState(userDetails.desc);

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Fill the details and Complete Booking</DialogTitle>
      <DialogContent>
        {/* <TextField
          variant="outlined"
          required
          style={{ marginBottom: '20px' }}
          fullWidth
          type="text"
          id="name"
          label="Name of the Restaurant"
          name="name"
          onChange={(e) => setRestaurantName(e.target.value)}
          autoComplete="name"
          value={restaurantName}
          autoFocus
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          id="desc"
          type="text"
          value={restaurantDescription}
          label="Description your restaurant"
          name="desc"
          onChange={(e) => setRestaurantDescription(e.target.value)}
          autoComplete="desc"
          autoFocus
          multiline
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          type="time"
          id="from"
          label="Work Hrs from"
          name="fromHrs"
                        // defaultValue="07:30"
          autoComplete="type"
          onChange={(e) => setFromHrs(e.target.value)}
          autoFocus
          value={fromHrs}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          type="time"
          id="to"
          label="Work Hrs to"
          name="toHrs"
          value={toHrs}
          autoComplete="to"
          onChange={(e) => setToHrs(e.target.value)}
                        // defaultValue="07:30 PM"
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          fullWidth
          label="Delivery Mode"
          variant="outlined"
          style={{ marginBottom: '20px' }}
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          select
        >
          <MenuItem value="Delivery Available">Delivery Available</MenuItem>
          <MenuItem value="Pick up">Pick up</MenuItem>
          <MenuItem value="Both">Delivery & Pick up</MenuItem>
        </TextField>
        <TextField
          fullWidth
          label="Country"
          variant="outlined"
          style={{ marginBottom: '20px' }}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          select
        >
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </TextField>
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          type="text"
          id="state"
          label="State"
          value={state}
          name="state"
          onChange={(e) => setState(e.target.value)}
          autoComplete="state"
          autoFocus
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          type="text"
          id="city"
          label="City"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="city"
          autoFocus
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          type="text"
          id="phone"
          label="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="phone"
          autoFocus
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: '20px' }}
          required
          fullWidth
          type="text"
          id="pin"
          label="Pin Code"
          name="pincode"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          autoComplete="pincode"
          autoFocus
        /> */}
      </DialogContent>
      <DialogActions>
        <ColorButton3 variant="contained" color="primary" onClick={(e) => { console.log(e); }}>
          Submit
        </ColorButton3>
      </DialogActions>
    </Dialog>
  );
};

AddEditProfile.propTypes = {
  // ...prop type definitions here
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default AddEditProfile;
