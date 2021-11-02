/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  GET_RESTAURANT_MENU,
} from './types';

export const getRestaurantMenu = (restaurantId) => async (dispatch) => {
  axios.get(`${server}/menu/restaurant/${restaurantId}/dishes`)
    .then((response) => {
      const menu = response.data;
      dispatch({
        type: GET_RESTAURANT_MENU,
        payload: menu,
      });
      return true;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
      return false;
    });
};

export const addRestaurantMenu = (menuItems) => async (dispatch) => {
  axios.post(`${server}/menu/restaurant/dishes`, menuItems)
    .then(() => {
      dispatch(getRestaurantMenu(menuItems.restaurantId));
      return true;
    })
    .catch(() => false);
};

export const editRestaurantMenu = (menuItems) => async (dispatch) => {
  axios.post(`${server}/menu/restaurant/updatemenu`, { ...menuItems })
    .then((response) => {
      dispatch(getRestaurantMenu(menuItems.RestaurantId));
      alert(response.data.message);
      return true;
    })
    .catch(() => false);
};

export const deleteRestaurantMenu = (menuItems) => async (dispatch) => {
  axios.post(`${server}/menu/restaurant/deletemenu`, { ...menuItems })
    .then((response) => {
      dispatch(getRestaurantMenu(menuItems.RestaurantId));
      alert(response.data.message);
      return true;
    })
    .catch(() => false);
};
