import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

const logger = createLogger();
export const store = createStore(
  allReducers, applyMiddleware(logger, thunk),
);

export default store;
