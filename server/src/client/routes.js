import React from 'react';

//import {Route}  from 'react-router-dom';

import HomePage from './pages/home-page';
import UsersPage from './pages/users-page';
import AdminsPage from './pages/admins-page';
import NotFoundPage from './pages/not-found-page';
import App from './app';

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
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				path: '/users',
				...UsersPage
			},
			{
				...AdminsPage,
				path: '/admins'
			},
			{
				...NotFoundPage,
			}
		]
	}
];


