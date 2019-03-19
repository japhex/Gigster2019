import {FETCH_USERS_SUCCESS} from '../actions/users';

const initialState = {
	collection: []
};
export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				collection: action.users
			};
		default:
			return state;
	}
}