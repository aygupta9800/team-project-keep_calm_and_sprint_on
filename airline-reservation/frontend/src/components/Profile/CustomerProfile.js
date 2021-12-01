import React, { Profiler, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import CustomTextField from "../Input/CustomTextField";
import { makeStyles } from "@material-ui/core/styles";
import { ColorButton4 } from "../../constants/index";
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import { getUserDetails, updateProfile } from "../../state/action-creators/profileAction";
import "../styles.css";
import PopUp from "../Popup/Popup";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "white",
    padding: "20px",
    margin: "10px",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));



const CustomerProfile = () => {
    const classes = useStyles();
  const history = useHistory();

  const userProfileState = useSelector((state) => state.profile.userProfile);
  


  //const [userType, setUserType] = useState(userProfileState.userType);\
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Profile Updated Successfully!');
  const [userName, setUserName] = useState(userProfileState.userName);
  const [dob, setDOB] = useState(userProfileState.dob);
  const [email, setEmail] = useState(userProfileState.email);
  const [phoneNumber, setPhoneNumber] = useState(userProfileState.phoneNumber);
  const [mileageNumber, setMileageNumber] = useState(userProfileState.mileageNumber);
  const [mileagePoints, setMileagePoints] = useState(userProfileState.mileagePoints);
  const [addressline1, setAddressLine] = useState(userProfileState.address?.addressline1);
  const [city, setCity] = useState(userProfileState.address?.city);
  const [state, setState] = useState(userProfileState.address?.state);
  const [country, setCountry] = useState(userProfileState.address?.country);
  
  React.useEffect(() => {
    setUserName(userProfileState.userName);
    setDOB(userProfileState.dob);
    setEmail(userProfileState.email);
    setPhoneNumber(userProfileState.phoneNumber);
    setMileageNumber(userProfileState.mileageNumber);
    setMileagePoints(userProfileState.mileagePoints);
    setAddressLine(userProfileState.address?.addressline1);
    setCity(userProfileState.address?.city);
    setState(userProfileState.address?.state);
    setCountry(userProfileState.address?.country);
  }, [userProfileState])
  const dispatch = useDispatch();

  const [rows, setRows] = useState([]);

  const handleOnChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleOnChangeDOB = (event) => {
    setDOB(event.target.value);
  };
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleOnChangeMileageNumber = (event) => {
    setMileageNumber(event.target.value);
  };
  const handleOnChangeMileagePoints = (event) => {
    setMileagePoints(event.target.value);
  };
  const handleOnChangeAddressLine = (event) => {
    setAddressLine(event.target.value);
  };
  const handleOnChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleOnChangeState = (event) => {
    setState(event.target.value);
  };
  const handleOnChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleUpdateProfile = () => {
    const userProfile = {
      userName,
      dob,
      email,
      phoneNumber,
      mileageNumber,
      mileagePoints,
      address: {
        addressline1,
        city,
        state,
        country,
        //zipcode: zipcodeRef.current.value,
      },
    };
    dispatch(updateProfile(userProfile));
       setOpen(true);
       setTimeout(()=>{
           setOpen(false);
       }, 2000)
  };



    return (
        <div>
            <ApplicationCustomerNavbar  />
            <div className="employeeProfile">
        <Grid className={classes.wrapper}>
          <div>
            <h3> Passanger Information (Adult) </h3>
            <p>
              Enter the required information for each traveller
              <br /> and be sure it matches exactly to the government
              <br /> issued ID presented at the airport.{" "}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomTextField
              label="firstName"
              variant="outlined"
              placeholder="Full Name"
              fullWidth
              required
              value={userName}
              onChange={(e) => {
                handleOnChangeUserName(e);
              }}
            />
            <CustomTextField
              label="dateOfBirth"
              variant="outlined"
              placeholder="Date of birth"
              fullWidth
              required
              value={dob}
              onChange={(e) => {
                handleOnChangeDOB(e);
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomTextField
              label="email"
              variant="outlined"
              placeholder="Email"
              fullWidth
              required
              value={email}
              onChange={(e) => {
                handleOnChangeEmail(e);
              }}
            />

            <CustomTextField
              label="phoneNumber"
              variant="outlined"
              placeholder="Phone Number"
              fullWidth
              required
              value={phoneNumber}
              onChange={(e) => {
                handleOnChangePhoneNumber(e);
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomTextField
              label="mileageNumber"
              variant="outlined"
              placeholder="Mileage Number"
              fullWidth
              required
              disabled={true}
              value={mileageNumber}
              onChange={(e) => {
                handleOnChangeMileageNumber(e);
              }}
            />

            <CustomTextField
              label="milagePoints"
              variant="outlined"
              placeholder="Mileage Points"
              fullWidth
              required
              disabled={true}
              value={mileagePoints}
              onChange={(e) => {
                handleOnChangeMileagePoints(e);
              }}
            />
          </div>
          <h4> Address Information </h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomTextField
              label="addressline1"
              variant="outlined"
              placeholder="Address"
              fullWidth
              required
              value={addressline1}
              onChange={(e) => {
                handleOnChangeAddressLine(e);
              }}
            />

            <CustomTextField
              label="city"
              variant="outlined"
              placeholder="City"
              fullWidth
              required
              value={city}
              onChange={(e) => {
                handleOnChangeCity(e);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomTextField
              label="state"
              placeholder="State"
              variant="outlined"
              fullWidth
              required
              value={state}
              onChange={(e) => {
                handleOnChangeState(e);
              }}
            />
            <CustomTextField
              label="country"
              variant="outlined"
              placeholder="Country"
              fullWidth
              required
              value={country}
              onChange={(e) => {
                handleOnChangeCountry(e);
              }}
            />
          </div>
          <div>
            <h3> Bag Information </h3>
            <p>
              Each passanger is allowed one free carry-on bag and one personal
              item. <br />
              First checked bag for each customer is also free. <br />
              Second bag checked free is waived for loyalty program members.
            </p>
            <br />
          </div>
          <ColorButton4
            variant="contained"
            style={{
              height: "50px",
              alignSelf: "center",
              width: "100%",
              marginBottom: "10px",
            }}
            onClick={handleUpdateProfile}
          >
            Update
          </ColorButton4>
        </Grid>
      </div>
      <PopUp open={open} message={message}/>
        </div>
    );
}

export default CustomerProfile;