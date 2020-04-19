import loggedReducer from './isLogged';
import outputReducer from './output';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  isLogged: loggedReducer,
  output: outputReducer
});

export default allReducers;
