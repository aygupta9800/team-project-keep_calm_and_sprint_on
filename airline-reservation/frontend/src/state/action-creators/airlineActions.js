/* eslint-disable no-alert */
import axios from "axios";
import server from "../../Config";
import {
  LOGOUT_SUCCESS,
  STORE_SEARCH_PARAMS,
  GET_AIRLINE_DETAILS,
  UPDATE_AIRLINE,
} from "./types";

const airlineDetails = null;

export const storeSearchParams =
  (airlineDetails, history) => async (dispatch) => {
    dispatch({
      type: STORE_SEARCH_PARAMS,
      payload: airlineDetails,
    });
  };

export const getAirlineDetails = () => async (dispatch) => {
  axios
    .get(`${server}/airline`)
    .then((response) => {
      const airlineDetails = response.data?.data;
      dispatch({
        type: GET_AIRLINE_DETAILS,
        payload: response.data?.data,
      });

      return airlineDetails;
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
  history.push("/");
};

export const updateAirline = (airlineId, userId, userType, airlineDetails) => async (dispatch) => {
  axios
  .put(`${server}/airline`, {airlineId, userId, userType, airlineDetails})
  .then((response) => {
    const airlineDetails = response.data?.data;
    dispatch({
      type: GET_AIRLINE_DETAILS,
      payload: response.data?.data,
    });
    alert(" Updated Successfully");
    return airlineDetails;
  })
  .catch((err) => {
    alert(err);
    return false;
  });
}

export default airlineDetails;
