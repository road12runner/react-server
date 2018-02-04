import React from 'react';
import {Route}  from 'react-router-dom';

import Home from './components/home';
import Users from './components/users';

export default () => {
	return (
		<div>
			<Route exact path="/" component={Home}/>
			<Route  path="/users" component={Users}/>
		</div>
	);
};