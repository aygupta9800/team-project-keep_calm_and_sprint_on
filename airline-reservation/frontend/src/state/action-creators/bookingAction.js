/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  GET_BOOKINGS
} from './types';

export const getBookings = () => async (dispatch) => {
  axios.get(`${server}/booking/user/619bc9b2ea585778faad8f74`)
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

