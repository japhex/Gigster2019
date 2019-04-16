export const FETCH_ARTIST_SEARCH_REQUEST = 'FETCH_ARTIST_SEARCH_REQUEST';
export const FETCH_ARTIST_SEARCH_SUCCESS = 'FETCH_ARTIST_SEARCH_SUCCESS';
export const FETCH_ARTIST_SEARCH_FAILED = 'FETCH_ARTIST_SEARCH_FAILED';

export const FETCH_VENUE_SEARCH_REQUEST = 'FETCH_VENUE_SEARCH_REQUEST';
export const FETCH_VENUE_SEARCH_SUCCESS = 'FETCH_VENUE_SEARCH_SUCCESS';
export const FETCH_VENUE_SEARCH_FAILED = 'FETCH_VENUE_SEARCH_FAILED';

export function fetchArtistSearch(artist) {
	return {
		type: FETCH_ARTIST_SEARCH_REQUEST,
		artist: artist
	};
}

export function fetchVenueSearch(venue) {
	return {
		type: FETCH_VENUE_SEARCH_REQUEST,
		venue: venue
	};
}

