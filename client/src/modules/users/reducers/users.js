import {FETCH_USERS_SUCCESS, FETCH_USER_BY_USERNAME_SUCCESS} from '../actions/users';

const initialState = {
	collection: [],
	activeUser: {}
};
export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				collection: action.users
			};
		case FETCH_USER_BY_USERNAME_SUCCESS:
			return {
				...state,
				activeUser: action.user
			};
		default:
			return state;
	}
}