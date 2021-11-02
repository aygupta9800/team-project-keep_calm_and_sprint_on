/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  GET_RESTAURANT_ORDERS,
} from './types';

export const getRestaurantOrders = (restaurantId) => async (dispatch) => {
  axios.get(`${server}/orders/restaurant/${restaurantId}/orders`)
    .then((response) => {
      const orders = response.data;
      dispatch({
        type: GET_RESTAURANT_ORDERS,
        payload: orders,
      });
      return true;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
      return false;
    });
};

export const getCustomerOrders = (customerId) => async (dispatch) => {
  axios.get(`${server}/orders/customer/${customerId}/orders`)
    .then((response) => {
      const orders = response.data;
      dispatch({
        type: GET_RESTAURANT_ORDERS,
        payload: orders,
      });
      return true;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
      return false;
    });
};

export const editRestaurantOrderStatus = (orderDetails, userType) => async (dispatch) => {
  axios.post(`${server}/orders/restaurant/updateorders`, { ...orderDetails })
    .then((response) => {
      if (userType === 'restaurant') {
        dispatch(getRestaurantOrders(orderDetails.RestaurantId));
      } else {
        dispatch(getCustomerOrders(orderDetails.CustomerId));
      }
      alert(response.data.message);
      return true;
    })
    .catch(() => false);
};
