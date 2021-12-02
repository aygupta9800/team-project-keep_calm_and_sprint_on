
import { ClickAwayListener } from '@material-ui/core';
import axios from 'axios';
import server from '../../Config';
import {
  GET_USER_DETAILS,
  UPDATE_PROFILE
} from './types';

export const getUserDetails = (id) => async (dispatch) => {
    axios.get(`${server}/profile/user/${id}`)
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

export const updateProfile = (userDetails, id ) => async (dispatch) => {
    axios.put(`${server}/profile/user/${id}`, userDetails).then(res=>{
        dispatch({
            type:UPDATE_PROFILE,
            payload: userDetails
            })
            return true;
    })  
  };
  