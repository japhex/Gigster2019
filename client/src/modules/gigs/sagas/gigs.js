import { takeEvery, put } from 'redux-saga/effects';
import GigsAPI from '../../../api/gigs';
import { FETCH_GIGS_REQUEST, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAILED, FETCH_GIGS_ADDITIONAL_DETAIL_REQUEST, FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS, FETCH_GIGS_ADDITIONAL_DETAIL_FAILED } from '../actions/gigs';

// Fetch gigs from DB
export function* fetchGigs(action) {
	try {
		const gigs = yield GigsAPI.getAll(action.gigs);
		yield put({type: FETCH_GIGS_SUCCESS, gigs});
	} catch(err) {
		yield put({type: FETCH_GIGS_FAILED, payload: err});
	}
}

export function* watchFetchGigs() {
	yield takeEvery(FETCH_GIGS_REQUEST, fetchGigs);
}

// Fetch gigs additional detail from LastFM
export function* fetchGigsAdditionalDetail(action) {
	try {
		const gigs = yield GigsAPI.getAdditionalDetails(action.gigs);
		yield put({type: FETCH_GIGS_ADDITIONAL_DETAIL_SUCCESS, gigs});
	} catch(err) {
		yield put({type: FETCH_GIGS_ADDITIONAL_DETAIL_FAILED, payload: err});
	}
}

export function* watchFetchGigsAdditionalDetail() {
	yield takeEvery(FETCH_GIGS_ADDITIONAL_DETAIL_REQUEST, fetchGigsAdditionalDetail);
}