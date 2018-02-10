import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
	switch  (action.type) {
		case actionTypes.FETCH_ADMINS:
			return action.payload.data;
		default:
			return state;
	}
}