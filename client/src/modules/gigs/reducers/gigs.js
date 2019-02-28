import {splitGigs} from './../middleware/utils';
import {FETCH_GIGS_SUCCESS, FETCH_GIGS_FAILED, FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS} from './../actions/gigs';

const initialState = {
	gigs: [],
	oldGigs: [],
	newGigs: [],
	gigsStatus: ""
};
export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_GIGS_SUCCESS:
			const gigs = splitGigs(action.gigs);

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
		default:
			return state;
	}
}