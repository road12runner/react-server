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

const store = createStore(reducers, {}, applyMiddleware(thunk));


const routes = (
	<BrowserRouter>
		<div>{renderRoutes(Routes)}</div>
	</BrowserRouter>
);

const  app = <Provider store={store}>
	{routes}
</Provider>;


ReactDOM.hydrate(app, document.querySelector('#root'));

