import { takeEvery, put } from 'redux-saga/effects';
import GigsAPI from '../../../api/gigs';
import {POST_CREATE_GIG_REQUEST, POST_CREATE_GIG_SUCCESS, POST_CREATE_GIG_FAILED, POST_UPDATE_GIG_REQUEST, POST_UPDATE_GIG_SUCCESS, POST_UPDATE_GIG_FAILED} from '../actions/gigs'

// Post create gig
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

// Put update gig
export function* updateGig(action) {
	try {
		const gigs = yield GigsAPI.update(action.gig);
		yield put({type: POST_UPDATE_GIG_SUCCESS, gigs});
	} catch(err) {
		yield put({type: POST_UPDATE_GIG_FAILED, payload: err});
	}
}

export function* watchUpdateGig() {
	yield takeEvery(POST_UPDATE_GIG_REQUEST, updateGig);
}