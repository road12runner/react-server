import express from 'express';
import 'babel-polyfill';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore();
	
	res.send(renderer(req, store));
});


app.listen ( 3000 , () => {
	console.log('listen on 3000 port');
});