import React from 'react';
import {renderToString} from 'react-dom/server';
import {renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/routes';
import {Provider} from 'react-redux'
export default (req, store) => {
	const routes = (<StaticRouter context={{}} location={req.path}>
		<div>
			{renderRoutes(Routes)}
		</div>
	</StaticRouter>);
	
	const app = <Provider store={store}>
		{routes}
	</Provider>;
	
	const content = renderToString(app);
	return `
		<html>
		<head></head>
		<body>
		<div id="root">${content}</div>
		<script src="bundle.js"></script>
		</body>
		</html>
	`;

}