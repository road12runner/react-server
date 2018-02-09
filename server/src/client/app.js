import React from 'react';
import {renderRoutes} from  'react-router-config';
import * as actions from '../client/actions';

import Header from './components/header';
const App = ({route}) => {
	return <div>
		<Header/>
		{renderRoutes(route.routes)}
		</div>
};



export default {component: App, loadData: ({dispatch}) => {
	return dispatch(actions.fetchCurrentUser());
}};
