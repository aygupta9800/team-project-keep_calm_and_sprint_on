import {
  // import action types here
} from '../action-creators/types';

const initialState = {
  // define initial state here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case RESTAURANT_LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };
    default:
      return state;
  }
};

export default reducer;
