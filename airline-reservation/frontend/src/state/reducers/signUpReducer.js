import {
  CUSTOMER_SIGNUP_SUCCESS,
  CUSTOMER_SIGNUP_FAILURE,
  RESTAURANT_SIGNUP_SUCCESS,
  RESTAURANT_SIGNUP_FAILURE,
} from '../action-creators/types.js';

const initialState = {
  user: {},
  loginOrSignUpError: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case RESTAURANT_SIGNUP_FAILURE:
      return {
        ...state,
        loginOrSignUpError: action.payload,
      };
    case CUSTOMER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case CUSTOMER_SIGNUP_FAILURE:
      return {
        ...state,
        loginOrSignUpError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
