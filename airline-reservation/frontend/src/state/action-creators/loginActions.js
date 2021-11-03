/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  LOGOUT_SUCCESS
 // import action types from here
} from './types';

// export const restaurantLogin = (userDetails, history) => async (dispatch) => {
//   axios.post(`${server}/login/restaurant/login`, { ...userDetails })
//     .then((response) => {
//       const user = response.data;
//       dispatch({
//         type: RESTAURANT_LOGIN_SUCCESS,
//         payload: user,
//       });
//       history.push('/dashboard');
//       return true;
//     })
//     .catch(() => {
//       alert('Enter Valid Credentials for valid account type');
//       return false;
//     });
// };
export const logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  history.push('/');
};
