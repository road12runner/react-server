import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import Routes from './routes';

import reducers from './reducers';

import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: '/api',
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));


const routes = (
	<BrowserRouter>
		<div>{renderRoutes(Routes)}</div>
	</BrowserRouter>
);

const  app = <Provider store={store}>
	{routes}
</Provider>;


ReactDOM.hydrate(app, document.querySelector('#root'));

