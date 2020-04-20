import outputReducer from './outputReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducers = combineReducers({
  auth: authReducer,
  output: outputReducer,
  firebase: firebaseReducer
});

export default rootReducers;
