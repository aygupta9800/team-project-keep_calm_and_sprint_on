
import { ClickAwayListener } from '@material-ui/core';
import axios from 'axios';
import server from '../../Config';
import {
  UPDATE_PROFILE
} from './types';

export const updateProfile = (userDetails) => async (dispatch) => {
    axios.put('http://localhost:3009/profile/user/619bc9b2ea585778faad8f74', userDetails).then(res=>{
        dispatch({
            type:UPDATE_PROFILE,
            payload: userDetails
            })
            return true;
    })  
  };
  