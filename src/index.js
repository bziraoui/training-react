import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { store } from './redux/redux-config';
import { createStore } from 'redux';
import listReducer from './redux/reducers/elementReducer';

export const store = createStore(listReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
