import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import localStorage, { loadState } from '../middleware/local-storage';
import apiMiddleware from '../middleware/server-api';

import reducer from '../reducers';

const initialState = loadState('state');
const store = createStore(reducer, initialState, applyMiddleware(apiMiddleware, thunk, promise, logger, localStorage('state')));

export default store;