/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ColorButton3 } from '../constants/index';


  
const AirlinePopup = (props) => {
  console.log("Props" , props);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" fullWidth
    maxWidth="md" >
      <DialogTitle id="form-dialog-title">Update Airline Details</DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px' }}>
            <TextField
              label="Airline Name"
              variant="outlined"
              style={{marginRight: '20px'}}
              placeholder = "United Airlines"
              fullWidth
              required
              value=""
            />        
            <TextField
              label="Helpline Number"
              variant="outlined"
              placeholder = "+16666666600"
              fullWidth
              required
              value=""
            />
        </div>

        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
            <TextField
              label="Support Email"
              variant="outlined"
              style={{marginRight: '20px'}}
              placeholder = "abc@gmail.com"
              fullWidth
              required
            />        
            
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between', padding: '20px'  }}>
        <TextField
              label="About "
              variant="outlined"
              placeholder = "About"
              fullWidth
              required
              multiline
              rows={4}
            />

        </div>
        
      </DialogContent>
      <DialogActions>
        <ColorButton3 variant="contained" color="primary" onClick={handleClose}> 
        Update
        </ColorButton3>

      </DialogActions>
    </Dialog>
  );
};



AirlinePopup.propTypes={
    //...prop type definitions here
    open: PropTypes.bool
}

export default AirlinePopup;
