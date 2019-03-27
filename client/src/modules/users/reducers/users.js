import { LOCATION_CHANGE } from 'connected-react-router';
import {splitGigs} from '../../middleware/utils';
import {FETCH_USERS_SUCCESS, FETCH_USER_BY_USERNAME_SUCCESS} from '../actions/users'

const initialState = {
	collection: [],
	activeUser: {},
	isLoading: false
};
export default function(state = initialState, action) {
	switch(action.type) {
		case LOCATION_CHANGE:
			return {
				...state,
				activeUser: {},
				isLoading: true
			}
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
				isLoading: false
			};
		default:
			return state;
	}
}