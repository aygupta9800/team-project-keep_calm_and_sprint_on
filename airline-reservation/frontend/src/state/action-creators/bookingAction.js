/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  CANCEL_BOOKING,
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

export const getAllBookings = (userId) => async (dispatch) => {
  axios.get(`${server}/booking`)
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

export const cancelBooking = (bookingId, userId) => async (dispatch) => {
  axios.delete(`${server}/booking/${bookingId}`)
    .then((response) => {
      dispatch({
        type: CANCEL_BOOKING,
      });
      dispatch(getBookings(userId));
      return true;
    })
    .catch((err) => {
      alert(err);
      return false;
    });
};
