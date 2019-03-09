import {splitGigs} from './../middleware/utils';
import {FETCH_GIGS_SUCCESS, FETCH_GIGS_FAILED, FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS, POST_CREATE_GIG_SUCCESS} from './../actions/gigs';

const initialState = {
	gigs: [],
	oldGigs: [],
	newGigs: [],
	gigsStatus: ""
};
export default function(state = initialState, action) {
	let gigs;
	switch(action.type) {
		case FETCH_GIGS_SUCCESS:
			gigs = splitGigs(action.gigs);

			return {
				...state,
				gigs: action.gigs,
				oldGigs: gigs.oldGigs,
				newGigs: gigs.newGigs,
				gigsStatus: ""
			};
		case FETCH_GIGS_FAILED:
			return {
				...state,
				gigsStatus: action.error
			};
		case FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS:
			const gigsDetail = splitGigs(action.gigs);
			return {
				...state,
				gigs: action.gigs,
				oldGigs: gigsDetail.oldGigs,
				newGigs: gigsDetail.newGigs,
				gigsStatus: ""
			};
		case POST_CREATE_GIG_SUCCESS:
			gigs = splitGigs(action.gigs);
			
			return {
				...state,
				gigs: action.gigs,
				oldGigs: gigs.oldGigs,
				newGigs: gigs.newGigs,
				gigsStatus: ""
			};
		default:
			return state;
	}
}