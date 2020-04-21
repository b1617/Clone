import outputReducer from './outputReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  isLogged: authReducer,
  output: outputReducer
});

export default rootReducers;
