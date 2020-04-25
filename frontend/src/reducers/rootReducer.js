import outputReducer from './outputReducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  isLogged: authReducer,
  output: outputReducer,
  message: messageReducer
});

export default rootReducers;
