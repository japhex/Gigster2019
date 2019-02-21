import {FETCH_GIGS_REQUEST, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAILED} from './../actions/gigs';

const initialState = {
	gigs: []
};
export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_GIGS_SUCCESS:
			return {
				...state,
				gigs: action.gigs === "" ? [] : action.gigs
			};
		default:
			return state;
	}
}