import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUsers = () => async dispatch => {
	const res = await  axios.get('http://react-ssr-api.herokuapp.com/users');
	
	dispatch({
		type: actionTypes.FETCH_USERS,
		payload: res
	});
};