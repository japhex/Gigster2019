import {splitGigs} from '../../middleware/utils';
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
			const gigsDetail = splitGigs(action.user.Gigs);
			return {
				...state,
				activeUser: {
					...action.user,
					oldGigs: gigsDetail.oldGigs,
					newGigs: gigsDetail.newGigs
				},
			};
		default:
			return state;
	}
}