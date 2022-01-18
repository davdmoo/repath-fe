import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import logger from './middlewares/logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
