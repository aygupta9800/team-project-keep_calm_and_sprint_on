import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import { getAirlineDetails } from "../state/action-creators/airlineActions.js";
import AirlinePopup from "./AirlinePopup.js";
import { ColorButton3 } from "../constants/index.js";
import ApplicationEmployeeNavbar from "./ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js";
import ApplicationCustomerNavbar from "./ApplicationCustomerNavbar/ApplicationCustomerNavbar.js";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "white",
    padding: "20px",
    margin: "50px",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));

const Airline = (props) => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAirlineDetails());
    }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const airlineDetails = useSelector((state) => state.airline.airlineDetails)
  const userType = props.location.state.userType;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {userType === "employee" ? (
        <ApplicationEmployeeNavbar />
      ) : (
        <ApplicationCustomerNavbar />
      )}
      <div className="employeeProfile">
        <Grid className={classes.wrapper}>
          <div>
            <Typography variant="h2" align="center" style={{ color: "orange" }}>
              WHO WE ARE
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              component="p"
              style={{ wordWrap: "break-word", color: "#222" }}
            >
              {airlineDetails.desc}
              {/* United is connecting people, uniting the world United has the most
              comprehensive route network among North American carriers. A
              modern fleet which is the most fuel-efficient among U.S. network
              carriers (when adjusted for cabin size. Industry-leading loyalty
              program that provides more opportunities to earn and redeem miles
              worldwide Optimal hub locations, including hubs in the four
              largest cities in the United States Approximately 70,000 employees
              reside in every U.S. state and in countries around the world */}
            </Typography>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          ></div>

          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          ></div>
          <div>
            <h2 style={{ color: "orange", paddingLeft: 15 }}>Contact us</h2>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 20px 20px 21px",
              }}
            >
              <MailIcon style={{ fill: "orange" }}></MailIcon>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "black", paddingRight: "30px" }}
                margin={5}
              >
                {airlineDetails.supportEmail}
              </Typography>

              <CallIcon style={{ fill: "orange" }}></CallIcon>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "black", paddingRight: "30px" }}
                margin={5}
              >
                {airlineDetails.helplineNumber}
              </Typography>
            </Box>

            <br />
          </div>
          <div>
            {userType === "employee" ? (
              <ColorButton3
                variant="contained"
                onClick={() => {
                  handleOpen(true);
                }}
                style={{
                  height: "50px",
                  alignSelf: "center",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Update
              </ColorButton3>
            ) : (
              <p></p>
            )}
          </div>

          <AirlinePopup open={open} handleClose={handleClose}></AirlinePopup>
        </Grid>
      </div>
    </div>
  );
};
Airline.propTypes = {
  //...prop type definitions here
  userType: PropTypes.string,
  airlineDetails: PropTypes.object,
};

export default Airline;
