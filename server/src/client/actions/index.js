import * as actionTypes from './actionTypes';

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
	const res = await  axiosInstance.get('users');
	dispatch({
		type: actionTypes.FETCH_USERS,
		payload: res
	});
};


export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
	const res = await axiosInstance.get('/current_user');

	dispatch({
		type: actionTypes.FETCH_CURRENT_USER,
		payload: res
	})
};