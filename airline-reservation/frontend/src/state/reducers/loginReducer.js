import {
  USER_SIGNUP,
  USER_LOGIN,
LOGIN_SUCCESS
} from '../action-creators/types';

const initialState = {  
  // define initial state here
  flightDetails: [],
  userDetails: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        userDetails: action.payload
      };
      case USER_LOGIN:{
        return{
          ...state,
          userDetails: action.payload
        }
      }
    default:
      return state;
  }
};

export default reducer;
