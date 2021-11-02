import {
  GET_RESTAURANT_MENU,
  ADD_RESTAURANT_MENU,
  EDIT_RESTAURANT_MENU,
} from '../action-creators/types';

const initialState = {
  menu: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case ADD_RESTAURANT_MENU:
      return {
        state,
      };
    case EDIT_RESTAURANT_MENU:
      return {
        state,
      };
    default:
      return state;
  }
};

export default reducer;
