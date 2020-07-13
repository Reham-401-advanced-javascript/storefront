import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import product from './categories.js';
// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// managing independent parts of the state.

const rootReducer = combineReducers({ product });

const store = () => {
  return createStore(rootReducer);
};
export default store();
