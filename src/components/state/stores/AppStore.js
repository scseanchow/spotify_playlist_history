import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export const createAppStore = () => {
    return createStore(applyMiddleware(thunk, promiseMiddleware()));
};