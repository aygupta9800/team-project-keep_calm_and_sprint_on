import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import flightReducer from './flightReducer';
import profileReducer from './profileReducer';
import bookings from './bookingReducer';
import airline from './airlineReducer';

const reducers = combineReducers({
  login: loginReducer,
  flight: flightReducer,
  profile: profileReducer,
  bookings: bookings,
  airline: airline,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
export default rootReducer;
