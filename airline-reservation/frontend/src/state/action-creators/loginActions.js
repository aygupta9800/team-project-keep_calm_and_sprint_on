/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  USER_LOGIN,
  USER_SIGNUP,
  LOGOUT_SUCCESS
 // import action types from here
} from './types';

export const userLogin = (userDetails, history) => async (dispatch) => {
  //userDetails.userType='Employee';
  // dispatch({
  //   type:USER_LOGIN,
  //   payload: userDetails
  //   })
  console.log("userDetails", userDetails);
  axios.post(`${server}/login/user`, { ...userDetails })
    .then((response) => {
      //const user = response.data;
    dispatch({
      type:USER_SIGNUP,
      payload: response.data
      })
      if(userDetails.userType==='employee'){
        history.push({pathname: '/Airline', state: {userType: 'employee'} });
      }else{
        history.push({pathname: '/Airline', state: {userType: 'user'} });
      }
      return true;
    })
    .catch(() => {
      alert('Enter Valid Credentials for valid account type');
      return false;
    });
};

export const userSignup = (userDetails, history) => async (dispatch) => {
  
  axios.post(`${server}/signup/user`, { ...userDetails })
    .then((response) => {
      //const user = response.data;
      dispatch({
        type:USER_SIGNUP,
        payload: response.data
        })
        if(userDetails.userType==='employee'){
          history.push({pathname: '/Airline', state: {userType: 'employee'} });
        }else{
          history.push({pathname: '/Airline', state: {userType: 'user'} });
        }
      return true;
    })
    .catch((err) => {
      alert(err.response.data.msg);
      return false;
    });
};

//   // axios.post(`${server}/login/restaurant/login`, { ...userDetails })
//   //   .then((response) => {
//   //     const user = response.data;
//   //     dispatch({
//   //       type: RESTAURANT_LOGIN_SUCCESS,
//   //       payload: user,
//   //     });
//   //     history.push('/dashboard');
//   //     return true;
//   //   })
//   //   .catch(() => {
//   //     alert('Enter Valid Credentials for valid account type');
//   //     return false;
//   //   });
//};


export const logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  history.push('/');
};
