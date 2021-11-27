import {
    GET_BOOKINGS
} from '../action-creators/types';
  
  const initialState = {
    bookings: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BOOKINGS:
        return {
          ...state,
          bookings: action.payload.data
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  