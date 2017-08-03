import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from './reducers';

const configureStore = (initialState) =>
  createStore(
      reducer,
      initialState,
      applyMiddleware(createLogger),
    );

export default configureStore;
