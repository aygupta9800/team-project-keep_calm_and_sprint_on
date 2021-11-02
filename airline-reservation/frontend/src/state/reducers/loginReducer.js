import {
  RESTAURANT_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_SUCCESS,
  UPDATE_RESTAURANT_SUCCESS,
  SET_SEARCH_STRING,
  GET_ALL_RESTAURANT_MENU,
  GET_ALL_RESTAURANTS,
  SET_FAVORITE,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_CUSTOMER_SUCCESS,
  ADD_ADDRESS,
  GET_ADDRESS,
} from '../action-creators/types';

const initialState = {
  user: {},
  allRestaurants: {},
  allRestaurantMenu: {},
  searchString: '',
  cartItems: [],
  addressList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case CUSTOMER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case GET_ALL_RESTAURANTS:
      return {
        ...state,
        allRestaurants: action.payload,
      };
    case GET_ALL_RESTAURANT_MENU:
      return {
        ...state,
        allRestaurantMenu: action.payload,
      };
    case SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };
    case SET_FAVORITE:
      return {
        ...state,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case ADD_ADDRESS:
      return {
        ...state,
      };
    case GET_ADDRESS:
      return {
        ...state,
        addressList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
