/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ColorButton3 } from "../constants/index";
import { updateAirline } from "../state/action-creators/airlineActions";

const AirlinePopup = (props) => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(props.airlineDetails.desc);
  const [helplineNumber, setHelplineNumber] = useState(props.airlineDetails.helplineNumber);
  const [supportEmail, setSupportEmail] = useState(props.airlineDetails.supportEmail);

  const userDetails = useSelector((state) => state.login.userDetails.data);

  useEffect(() => {
    setDesc(props.airlineDetails.desc);
    setHelplineNumber(props.airlineDetails.helplineNumber);
    setSupportEmail(props.airlineDetails.supportEmail);
  }, [props.airlineDetails]);

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">Update Airline Details</DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <TextField
            label="Helpline Number"
            variant="outlined"
            placeholder="+16666666600"
            fullWidth
            required
            onChange={(e) => {
              setHelplineNumber(e.target.value)
            }}
            value={helplineNumber}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <TextField
            label="Support Email"
            variant="outlined"
            style={{ marginRight: "20px" }}
            placeholder="abc@gmail.com"
            fullWidth
            required
            onChange={(e) => {
              setSupportEmail(e.target.value)
            }}
            value={supportEmail}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <TextField
            label="About "
            variant="outlined"
            placeholder="About"
            fullWidth
            required
            multiline
            onChange={(e) => {
              setDesc(e.target.value)
            }}
            supportEmail
            value={desc}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <ColorButton3 variant="contained" color="primary" onClick={() => {
          props.handleClose();
          dispatch(updateAirline(props.airlineDetails._id, userDetails._id, 'employee', {...props.airlineDetails, desc, helplineNumber, supportEmail}));
        }}>
          Update
        </ColorButton3>
      </DialogActions>
    </Dialog>
  );
};

AirlinePopup.propTypes = {
  //...prop type definitions here
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  airlineDetails: PropTypes.object
};

export default AirlinePopup;
