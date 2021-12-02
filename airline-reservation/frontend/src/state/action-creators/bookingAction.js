/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  GET_BOOKINGS
} from './types';

export const getBookings = (userId) => async (dispatch) => {
  axios.get(`${server}/booking/user/${userId}`)
    .then((response) => {
      dispatch({
        type: GET_BOOKINGS,
        payload: response.data,
      });
      return true;
    })
    .catch((err) => {
      alert(err);
      return false;
    });
};

