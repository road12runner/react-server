import React from 'react';
import {renderToString} from 'react-dom/server';
import {renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/routes';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import {Helmet} from 'react-helmet';


export default (req, store, context) => {
	const routes = (<StaticRouter context={context} location={req.path}>
		<div>
			{renderRoutes(Routes)}
		</div>
	</StaticRouter>);
	
	const app = <Provider store={store}>
		{routes}
	</Provider>;
	
	const helmet = Helmet.renderStatic();
	
	const content = renderToString(app);
	return `
		<html>
		<head>
		  ${helmet.title.toString()}
		  ${helmet.meta.toString()}
		 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
		</head>
		<body>
		<div id="root">${content}</div>
		<script>
			window.INITIAL_STATE = ${serialize(store.getState())}
		</script>
		<script src="bundle.js"></script>
		</body>
		</html>
	`;

}