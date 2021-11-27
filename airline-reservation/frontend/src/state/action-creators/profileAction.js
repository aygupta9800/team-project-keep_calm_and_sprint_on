
import { ClickAwayListener } from '@material-ui/core';
import axios from 'axios';
import server from '../../Config';
import {
  GET_USER_DETAILS,
  UPDATE_PROFILE
} from './types';

export const getUserDetails = () => async (dispatch) => {
    axios.get(`${server}/profile/user/619bc9b2ea585778faad8f74`)
      .then((response) => {
        dispatch({
          type: GET_USER_DETAILS,
          payload: response.data,
        });
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

export const updateProfile = (userDetails) => async (dispatch) => {
    axios.put('http://localhost:3009/profile/user/619bc9b2ea585778faad8f74', userDetails).then(res=>{
        dispatch({
            type:UPDATE_PROFILE,
            payload: userDetails
            })
            return true;
    })  
  };
  