import {
  USER_SIGNUP,
  USER_LOGIN,
  SET_MILEAGE_POINTS,
} from '../action-creators/types';

const initialState = {  
  // define initial state here
  flightDetails: [],
  userDetails: {},
  mileage: 0
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
      case SET_MILEAGE_POINTS: {
        return{
          ...state,
          mileage: action.payload
        }
      }
    default:
      return state;
  }
};

export default reducer;
