import {FETCH_USERS_SUCCESS} from '../actions/users';

const initialState = {
	users: []
};
export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				users: action.users
			};
		default:
			return state;
	}
}