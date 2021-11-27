import {
  UPDATE_PROFILE
  } from '../action-creators/types';
  
  const initialState = {
    userProfile: {}
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PROFILE:
        return {
          ...state,
          userProfile: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  