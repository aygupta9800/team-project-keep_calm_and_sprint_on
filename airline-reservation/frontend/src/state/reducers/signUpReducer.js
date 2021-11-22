import {
  // include action types here
} from '../action-creators/types.js';

const initialState = {
  // include initial state here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case RESTAURANT_SIGNUP_SUCCESS:
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };
    // case RESTAURANT_SIGNUP_FAILURE:
    //   return {
    //     ...state,
    //     loginOrSignUpError: action.payload,
    //   };
    default:
      return state;
  }
};

export default reducer;
