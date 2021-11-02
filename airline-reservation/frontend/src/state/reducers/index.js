import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import restaurantMenuReducer from './restaurantMenuReducer';
import restaurantOrderReducer from './restaurantOrderReducer';

const reducers = combineReducers({
  login: loginReducer,
  signIn: signUpReducer,
  menu: restaurantMenuReducer,
  order: restaurantOrderReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
export default rootReducer;
