import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  postReducer,
  userReducer,
  searchReducer,
});

export default rootReducer;
