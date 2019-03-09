import { takeEvery, put } from 'redux-saga/effects';
import GigsAPI from '../../../api/gigs';
import { POST_CREATE_GIG_REQUEST, POST_CREATE_GIG_SUCCESS, POST_CREATE_GIG_FAILED } from '../actions/gigs';

// Fetch gigs from DB
export function* createGig(action) {
	try {
		const gigs = yield GigsAPI.create(action.gig);
		yield put({type: POST_CREATE_GIG_SUCCESS, gigs});
	} catch(err) {
		yield put({type: POST_CREATE_GIG_FAILED, payload: err});
	}
}

export function* watchCreateGig() {
	yield takeEvery(POST_CREATE_GIG_REQUEST, createGig);
}