import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUsers = () => async dispatch => {
	console.log('requesting http://react-ssr-api.herokuapp.com/users');
	const res = await  axios.get('http://react-ssr-api.herokuapp.com/users');
	console.log('response', res);
	dispatch({
		type: actionTypes.FETCH_USERS,
		payload: res
	});
};