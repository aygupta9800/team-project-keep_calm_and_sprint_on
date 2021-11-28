import {
    STORE_SEARCH_PARAMS,
    GET_AIRLINE_DETAILS
} from '../action-creators/types';

const initialState = {
    searchParams: {},
    airlineDetails: []
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_SEARCH_PARAMS:
        return {
          ...state,
          searchParams: action.payload
        }
      case GET_AIRLINE_DETAILS:
        return{
          ...state,
          airlineDetails: action.payload
        }
      default:
        return state;
    }
  };
  
  export default reducer;