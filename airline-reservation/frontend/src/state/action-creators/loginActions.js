/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  USER_LOGIN,
  USER_SIGNUP,
  SET_MILEAGE_POINTS,
  LOGOUT_SUCCESS
 // import action types from here
} from './types';

export const userLogin = (userDetails, history) => async (dispatch) => {
  axios.post(`${server}/login/user`, { ...userDetails })
    .then((response) => {
      dispatch({
        type: USER_LOGIN,
        payload: response.data
      })
      if(userDetails.userType==='employee'){
        history.push({pathname: '/Airline', state: {userType: 'employee'} });
      } else{
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
      dispatch({
        type: USER_SIGNUP,
        payload: response.data
      })
        if(userDetails.userType==='employee'){
          history.push({pathname: '/Airline', state: {userType: 'employee'} });
        } else{
          history.push({pathname: '/Airline', state: {userType: 'user'} });
        }
      return true;
    })
    .catch((err) => {
      alert(err.response.data.msg);
      return false;
    });
};

export const logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  history.push('/');
};

export const setMileagePoints = (mileage) => async (dispatch) => {
  dispatch({
    type: SET_MILEAGE_POINTS,
    payload: mileage
  });
};
