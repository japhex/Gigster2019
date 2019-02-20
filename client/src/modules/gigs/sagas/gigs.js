import { takeEvery, put } from 'redux-saga/effects';
import GigsAPI from '../../../api/gigs';
import { FETCH_GIGS_REQUEST, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAILED } from '../actions/gigs';

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
