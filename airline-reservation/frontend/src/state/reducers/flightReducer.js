import {
    STORE_SEARCH_PARAMS,
    GET_FLIGHT_DETAILS,
    MAKE_BOOKING
} from '../action-creators/types';
  
  const initialState = {
    searchParams: {},
    flightDetails: [],
    bookingDetails: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_SEARCH_PARAMS:
        return {
          ...state,
          searchParams: action.payload
        }
      case GET_FLIGHT_DETAILS:
        return{
          ...state,
          flightDetails: action.payload
        }
      case MAKE_BOOKING:
        return {
          ...state,
          bookingDetails: action.payload
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  