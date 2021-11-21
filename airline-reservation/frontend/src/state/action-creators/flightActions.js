/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  LOGOUT_SUCCESS,
  STORE_SEARCH_PARAMS,
  GET_FLIGHT_DETAILS
} from './types';

export const storeSearchParams = (searchDetails, history) => async (dispatch) => {
    dispatch({
        type: STORE_SEARCH_PARAMS,
        payload: searchDetails,
    });
};

export const getFlightDetails = () => async (dispatch) => {
  axios.get(`${server}/flight`)
    .then((response) => {
      dispatch({
        type: GET_FLIGHT_DETAILS,
        payload: response.data,
      });
      return true;
    })
    .catch((err) => {
      alert(err);
      return false;
    });
};

export const logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  history.push('/');
};
