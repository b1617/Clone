import outputReducer from './output';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const allReducers = combineReducers({
  output: outputReducer,
  firebase: firebaseReducer
});

export default allReducers;
