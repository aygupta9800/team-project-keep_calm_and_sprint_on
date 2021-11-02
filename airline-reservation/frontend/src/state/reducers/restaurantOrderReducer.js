import {
  GET_RESTAURANT_ORDERS,
  UPDATE_ORDER_STATUS,
} from '../action-creators/types';

const initialState = {
  orderDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_ORDERS:
      return {
        ...state,
        orderDetails: action.payload,
      };
    case UPDATE_ORDER_STATUS:
      return {
        state,
      };
    default:
      return state;
  }
};

export default reducer;
