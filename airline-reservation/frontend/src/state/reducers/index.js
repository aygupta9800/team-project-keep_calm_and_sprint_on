import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import flightReducer from './flightReducer';

const reducers = combineReducers({
  login: loginReducer,
  signIn: signUpReducer,
  flight: flightReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
export default rootReducer;
