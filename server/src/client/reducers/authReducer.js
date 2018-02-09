import * as actionTypes from '../actions/actionTypes';

export default (state = null, action) => {
	switch  (action.type) {
		case actionTypes.FETCH_CURRENT_USER:
			return action.payload.data || false;
		default:
			return state;
	}
}