import { combineReducers, createStore } from 'redux';
import listReducer from './reducers/elementReducer';

const initialState = {};

export const rootReducer = combineReducers({ listReducer });

export const store = createStore(
    listReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
