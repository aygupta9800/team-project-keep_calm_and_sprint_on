import {
    STORE_SEARCH_PARAMS,
    GET_FLIGHT_DETAILS
} from '../action-creators/types';
  
  const initialState = {
    searchParams: {},
    flightDetails: []
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
      default:
        return state;
    }
  };
  
  export default reducer;
  