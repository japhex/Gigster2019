import {SET_USER, LOGOUT} from './actions';

const initialState = {
	user: {}
};
export default function(state = initialState, action) {
	switch(action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload
			};
		case LOGOUT:
			return {
				...state,
				user: {}
			}
		default:
			return state;
	}
}