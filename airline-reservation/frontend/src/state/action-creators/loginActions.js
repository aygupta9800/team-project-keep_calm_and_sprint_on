/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  RESTAURANT_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_SUCCESS,
  UPDATE_RESTAURANT_SUCCESS,
  LOGOUT_SUCCESS,
  GET_ALL_RESTAURANTS,
  SET_SEARCH_STRING,
  SET_FAVORITE,
  GET_ALL_RESTAURANT_MENU,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_CUSTOMER_SUCCESS,
  ADD_ADDRESS,
  GET_ADDRESS,
  CLEAR_CART,
} from './types';

export const restaurantLogin = (userDetails, history) => async (dispatch) => {
  axios.post(`${server}/login/restaurant/login`, { ...userDetails })
    .then((response) => {
      const user = response.data;
      dispatch({
        type: RESTAURANT_LOGIN_SUCCESS,
        payload: user,
      });
      history.push('/dashboard');
      return true;
    })
    .catch(() => {
      alert('Enter Valid Credentials for valid account type');
      return false;
    });
};

export const customerLogin = (userDetails, history) => async (dispatch) => {
  axios.post(`${server}/login/customer/login`, { ...userDetails })
    .then((response) => {
      const user = response.data;
      dispatch({
        type: CUSTOMER_LOGIN_SUCCESS,
        payload: user,
      });
      history.push('/dashboard');
      return true;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      if (errorMessage) {
        alert(errorMessage);
      } else {
        alert('Enter Valid Credentials for valid account type');
      }
      return false;
    });
};

export const updateRestaurant = (userDetails, history) => async (dispatch) => {
  axios.post(`${server}/profile/restaurant/${userDetails.restaurantId}`, { ...userDetails })
    .then((response) => {
      const user = response.data;
      dispatch({
        type: UPDATE_RESTAURANT_SUCCESS,
        payload: user,
      });
      history.push('/profile');
      return true;
    })
    .catch(() => false);
};

export const updateCustomer = (userDetails, history) => async (dispatch) => {
  axios.post(`${server}/profile/customer/${userDetails.customerId}`, { ...userDetails })
    .then((response) => {
      const user = response.data;
      dispatch({
        type: UPDATE_CUSTOMER_SUCCESS,
        payload: user,
      });
      history.push('/customer/profile');
      return true;
    })
    .catch(() => false);
};

export const logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  history.push('/');
};

export const allRestaurantMenu = () => async (dispatch) => {
  axios.get(`${server}/menu/dishes/all`)
    .then((response) => {
      const menu = response.data;
      dispatch({
        type: GET_ALL_RESTAURANT_MENU,
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

export const getAllRestaurants = () => async (dispatch) => {
  axios.get(`${server}/login/restaurant/all`)
    .then((response) => {
      const restaurants = response.data;
      dispatch(allRestaurantMenu());
      dispatch({
        type: GET_ALL_RESTAURANTS,
        payload: restaurants,
      });
      return true;
    })
    .catch(() => false);
};

export const setSearchValue = (searchString, history) => async (dispatch) => {
  await dispatch({
    type: SET_SEARCH_STRING,
    payload: searchString,
  });
  history.push('/dashboard');
};

export const addOrRemoveFavorite = (restaurantId, value) => async (dispatch) => {
  axios.post(`${server}/profile/restaurant/favorite/${restaurantId}`, { isFavorite: value })
    .then(() => {
      dispatch({
        type: SET_FAVORITE,
        payload: value,
      });
      dispatch(getAllRestaurants());
      return true;
    })
    .catch(() => false);
};

export const addToCart = (dish) => async (dispatch) => {
  await dispatch({
    type: ADD_TO_CART,
    payload: dish,
  });
};

export const removeFromCart = (dishes, dishId) => async (dispatch) => {
  const latestData = dishes.filter((item) => item.DishId !== dishId);
  await dispatch({
    type: REMOVE_FROM_CART,
    payload: latestData,
  });
};

export const getAddress = (id) => async (dispatch) => {
  axios.get(`${server}/customer/address/${id}/all`)
    .then((response) => {
      const address = response.data;
      dispatch({
        type: GET_ADDRESS,
        payload: address,
      });
      return true;
    })
    .catch(() => false);
};

export const addAddress = (address) => async (dispatch) => {
  axios.post(`${server}/customer/address`, address)
    .then(() => {
      dispatch({
        type: ADD_ADDRESS,
        payload: address,
      });
      dispatch(getAddress(address.CustomerId));
      return true;
    })
    .catch(() => false);
};

export const placeOrder = (orderDetails, history) => async (dispatch) => {
  axios.post(`${server}/orders/placeorders`, orderDetails)
    .then(() => {
      alert('Order Placed Successfully');
      history.push('/dashboard');
      dispatch({
        type: CLEAR_CART,
        payload: [],
      });
      return true;
    })
    .catch(() => {
      alert("Couldn't place the order");
      return false;
    });
};
