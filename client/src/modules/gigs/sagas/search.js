import { takeEvery, put } from 'redux-saga/effects';
import SearchAPI from '../../../api/search';
import {FETCH_ARTIST_SEARCH_REQUEST, FETCH_ARTIST_SEARCH_SUCCESS, FETCH_ARTIST_SEARCH_FAILED, FETCH_VENUE_SEARCH_REQUEST, FETCH_VENUE_SEARCH_SUCCESS, FETCH_VENUE_SEARCH_FAILED, FETCH_EVENT_SEARCH_SUCCESS, FETCH_EVENT_SEARCH_FAILED, FETCH_EVENT_SEARCH_REQUEST} from '../actions/search'

// Fetch artist search results from Songkick API
export function* fetchArtistSearch(action) {
	try {
		const artists = yield SearchAPI.getArtistSearch(action.artist);
		yield put({type: FETCH_ARTIST_SEARCH_SUCCESS, artists});
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
		const venues = yield SearchAPI.getVenueSearch(action.venue);
		yield put({type: FETCH_VENUE_SEARCH_SUCCESS, venues});
	} catch(err) {
		yield put({type: FETCH_VENUE_SEARCH_FAILED, payload: err});
	}
}

export function* watchFetchVenueSearch() {
	yield takeEvery(FETCH_VENUE_SEARCH_REQUEST, fetchVenueSearch);
}

// Fetch event search results from Songkick API
export function* fetchEventSearch(action) {
	try {
		const events = yield SearchAPI.getEventSearch(action.event);
		yield put({type: FETCH_EVENT_SEARCH_SUCCESS, events});
	} catch(err) {
		yield put({type: FETCH_EVENT_SEARCH_FAILED, payload: err});
	}
}

export function* watchFetchEventSearch() {
	yield takeEvery(FETCH_EVENT_SEARCH_REQUEST, fetchEventSearch);
}