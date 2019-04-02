export const FETCH_GIGS_REQUEST = 'FETCH_GIGS_REQUEST';
export const FETCH_GIGS_SUCCESS = 'FETCH_GIGS_SUCCESS';
export const FETCH_GIGS_FAILED = 'FETCH_GIGS_FAILED';

export const FETCH_GIGS_ADDITIONAL_DETAIL_REQUEST = 'FETCH_GIGS_ADDITIONAL_DETAIL_REQUEST';
export const FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS = 'FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS';
export const FETCH_GIGS_ADDITIONAL_DETAIL_FAILED = 'FETCH_GIGS_ADDITIONAL_DETAIL_FAILED';

export const CREATE_GIG_REQUEST = 'CREATE_GIG_REQUEST';
export const CREATE_GIG_SUCCESS = 'CREATE_GIG_SUCCESS';
export const CREATE_GIG_FAILED = 'CREATE_GIG_FAILED';

export const UPDATE_GIG_REQUEST = 'UPDATE_GIG_REQUEST';
export const UPDATE_GIG_SUCCESS = 'UPDATE_GIG_SUCCESS';
export const UPDATE_GIG_FAILED = 'UPDATE_GIG_FAILED';

export const DELETE_GIG_REQUEST = 'DELETE_GIG_REQUEST';
export const DELETE_GIG_SUCCESS = 'DELETE_GIG_SUCCESS';
export const DELETE_GIG_FAILED = 'DELETE_GIG_FAILED';

export function fetchGigs() {
	return {
		type: FETCH_GIGS_REQUEST
	};
}

export function fetchGigsAdditionalDetail() {
	return {
		type: FETCH_GIGS_ADDITIONAL_DETAIL_REQUEST
	};
}

export function createGig(gig) {
	return {
		type: CREATE_GIG_REQUEST,
		gig: gig
	}
}

export function updateGig(gig) {
	return {
		type: UPDATE_GIG_REQUEST,
		gig: gig
	}
}

export function deleteGig(gigId) {
	return {
		type: DELETE_GIG_REQUEST,
		gigId: gigId
	}
}