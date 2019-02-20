export const FETCH_GIGS_REQUEST = 'FETCH_GIGS_REQUEST';
export const FETCH_GIGS_SUCCESS = 'FETCH_GIGS_SUCCESS';
export const FETCH_GIGS_FAILED = 'FETCH_GIGS_FAILED';

export function fetchGigs() {
	return {
		type: FETCH_GIGS_REQUEST
	};
}