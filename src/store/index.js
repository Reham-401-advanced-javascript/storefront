import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import product from './categories.js';

const rootReducer = combineReducers({ product });

const store = () => {
  return createStore(rootReducer);
};

export default store();
