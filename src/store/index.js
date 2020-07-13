import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import votes from './votes';

const rootReducer = combineReducers({ votes });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
