import React from 'react';
//import {Route}  from 'react-router-dom';

import HomePage from './pages/home-page';
import UsersPage from './pages/users-page';

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path="/" component={Home}/>
// 			<Route  path="/users" component={Users}/>
// 		</div>
// 	);
// };


export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{
		path: '/users',
		...UsersPage
	}
];