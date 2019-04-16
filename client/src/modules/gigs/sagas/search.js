import { takeEvery, put } from 'redux-saga/effects';
import SearchAPI from '../../../api/search';
import { FETCH_ARTIST_SEARCH_REQUEST, FETCH_ARTIST_SEARCH_SUCCESS, FETCH_ARTIST_SEARCH_FAILED, FETCH_VENUE_SEARCH_REQUEST, FETCH_VENUE_SEARCH_SUCCESS, FETCH_VENUE_SEARCH_FAILED } from '../actions/search';

// Fetch artist search results from Songkick API
export function* fetchArtistSearch(action) {
	try {
		const gigs = yield SearchAPI.getArtistSearch(action.artist);
		yield put({type: FETCH_ARTIST_SEARCH_SUCCESS, gigs});
	} catch(err) {
		yield put({type: FETCH_ARTIST_SEARCH_FAILED, payload: err});
	}
}

export function* watchFetchArtistSearch() {
	yield takeEvery(FETCH_ARTIST_SEARCH_REQUEST, fetchArtistSearch);
}

// Fetch venue search results from Songkick API
export function* fetchVenueSearch(action) {
	try {
		const gigs = yield SearchAPI.getVenueSearch(action.venue);
		yield put({type: FETCH_VENUE_SEARCH_SUCCESS, gigs});
	} catch(err) {
		yield put({type: FETCH_VENUE_SEARCH_FAILED, payload: err});
	}
}

export function* watchFetchVenueSearch() {
	yield takeEvery(FETCH_VENUE_SEARCH_REQUEST, fetchVenueSearch);
}