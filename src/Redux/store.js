import {legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers,applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { reducer } from './Item/ItemReducer';

const rootReducer=combineReducers({
    item:reducer
})

const store=createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger)
  ));

export default store;