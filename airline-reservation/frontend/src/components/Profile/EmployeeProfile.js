import React, { Profiler, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import CustomTextField from "../Input/CustomTextField";
import { makeStyles } from "@material-ui/core/styles";
import { ColorButton4 } from "../../constants/index";
import ApplicationEmployeeNavbar from "../ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js";
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

//can send in props all the data and then use it here
// and initialize using props.

// or use redux using use selector

export default function EmployeeProfile() {
  const classes = useStyles();
  const history = useHistory();

  const userProfileState = useSelector((state) => state.profile.userProfile);
  const userDetails = useSelector((state) => state.login.userDetails);
  
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())){
      alert('Please enter a valid email address.');
      return false;
    }else{
      return true;
    }
  }

  function ValidateDOB(dob) {
    var dateString = dob;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\-(0[1-9]|1[0-2])\-((19|20)\d\d))$/;
    if (regex.test(dateString)) {
        var parts = dateString.split("-");
        var dtDOB = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
        var dtCurrent = new Date();
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 14) {
          alert("Eligibility 14 years ONLY.")
            return false;
        }
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 14) {
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        return true;
    } else {
        alert("Please enter a correct date and in dd-mm-yyyy format.");
        return false;
    }
  }

  //const [userType, setUserType] = useState(userProfileState.userType);\
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Profile Updated Successfully!');
  const [userName, setUserName] = useState(userProfileState.userName);
  const [dob, setDOB] = useState(userProfileState.dob);
  const [email, setEmail] = useState(userProfileState.email);
  const [phone, setPhone] = useState(userProfileState.phone);
  const [mileagePoints, setMileagePoints] = useState(userProfileState.mileagePoints);
  const [addressline1, setAddressLine] = useState(userProfileState.address?.addressline1);
  const [city, setCity] = useState(userProfileState.address?.city);
  const [state, setState] = useState(userProfileState.address?.state);
  const [country, setCountry] = useState(userProfileState.address?.country);
  const [empId, setEmpId] = useState(userProfileState.empId);
  
  React.useEffect(() => {
    setUserName(userProfileState.userName);
    setDOB(userProfileState.dob);
    setEmail(userProfileState.email);
    setPhone(userProfileState.phone);
    setMileagePoints(userProfileState.mileagePoints);
    setAddressLine(userProfileState.address?.addressline1);
    setCity(userProfileState.address?.city);
    setState(userProfileState.address?.state);
    setCountry(userProfileState.address?.country);
    setEmpId(userProfileState.empId);
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
  const handleOnChangephone = (event) => {
    setPhone(event.target.value);
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
      phone,
      mileagePoints,
      address: {
        addressline1,
        city,
        state,
        country,
        //zipcode: zipcodeRef.current.value,
      },
    };
    if(validateEmail(email) && ValidateDOB(dob)) {
      dispatch(updateProfile(userProfile, userDetails.data._id));
        setOpen(true);
        setTimeout(()=>{
            setOpen(false);
        }, 2000)
      }
  };

  return (
    <div>
      <ApplicationEmployeeNavbar />
      <div className="employeeProfile">
        <Grid className={classes.wrapper}>
          <div>
            <h3> Employee Information (Adult) </h3>
            <p>
              Enter the required information and please
              <br /> present your employee ID card during checkin.{" "}
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
              label="phone"
              variant="outlined"
              placeholder="Phone Number"
              fullWidth
              required
              value={phone}
              onChange={(e) => {
                handleOnChangephone(e);
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
              value={empId}
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
              Each employee is allowed one free carry-on bag and one personal
              item. <br />
              Two checked bag for each employee is also free. <br />
              
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