import {
    GET_USER_DETAILS,
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
       case GET_USER_DETAILS:
       //console.log(action.payload.data);    
       return { 
               ...state,
               userProfile: action.payload.data
               
           }
      default:
        return state;
    }
  };
  
  export default reducer;
  