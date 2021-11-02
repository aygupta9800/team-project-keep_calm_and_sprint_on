/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import axios from 'axios';
import { isValidEmail } from '../../utils';
import server from '../../Config';
import {
  CUSTOMER_SIGNUP_SUCCESS,
  CUSTOMER_SIGNUP_FAILURE,
  RESTAURANT_SIGNUP_SUCCESS,
  RESTAURANT_SIGNUP_FAILURE,
  RESTAURANT_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_SUCCESS,

} from './types';

export const restaurantSignUp = (userDetails, history) => async (dispatch) => {
  const isValid = await isValidEmail(userDetails.email);
  if (isValid) {
    axios.post(`${server}/signup/restaurant/signup`, { ...userDetails })
      .then((response) => {
        const user = response.data;
        dispatch({
          type: RESTAURANT_SIGNUP_SUCCESS,
          payload: user,
        });
        dispatch({
          type: RESTAURANT_LOGIN_SUCCESS,
          payload: user,
        });
        history.push('/dashboard');
        return true;
      })
      .catch((error) => {
        const errorMessage = error.response.data.error;
        alert(errorMessage);
        dispatch({
          type: RESTAURANT_SIGNUP_FAILURE,
          payload: errorMessage,
        });
        return false;
      });
  } else {
    alert('Please enter valid email');
    return false;
  }
};

export const customerSignUp = (userDetails, history) => async (dispatch) => {
  const isValid = await isValidEmail(userDetails.email);
  if (isValid) {
    axios.post(`${server}/signup/customer/signup`, { ...userDetails })
      .then((response) => {
        const user = response.data;
        dispatch({
          type: CUSTOMER_SIGNUP_SUCCESS,
          payload: user,
        });
        dispatch({
          type: CUSTOMER_LOGIN_SUCCESS,
          payload: user,
        });
        history.push('/dashboard');
        return true;
      })
      .catch((error) => {
        const errorMessage = error.response.data.error;
        alert(errorMessage);
        dispatch({
          type: CUSTOMER_SIGNUP_FAILURE,
          payload: errorMessage,
        });
        return false;
      });
  } else {
    alert('Please enter valid email');
    return false;
  }
};
