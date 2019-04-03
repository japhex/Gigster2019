import { takeEvery, put } from 'redux-saga/effects';
import GigsAPI from '../../../api/gigs';
import {
	CREATE_GIG_REQUEST,
	CREATE_GIG_SUCCESS,
	CREATE_GIG_FAILED,
	UPDATE_GIG_REQUEST,
	UPDATE_GIG_SUCCESS,
	UPDATE_GIG_FAILED,
	DELETE_GIG_SUCCESS,
	DELETE_GIG_FAILED,
	DELETE_GIG_REQUEST
} from '../actions/gigs'

// Create gig
export function* createGig(action) {
	try {
		const gigs = yield GigsAPI.create(action.gig);
		console.log(gigs);
		yield put({type: CREATE_GIG_SUCCESS, gigs});
	} catch(err) {
		yield put({type: CREATE_GIG_FAILED, payload: err});
	}
}

export function* watchCreateGig() {
	yield takeEvery(CREATE_GIG_REQUEST, createGig);
}

// Update gig
export function* updateGig(action) {
	try {
		const gigs = yield GigsAPI.update(action.gig);
		yield put({type: UPDATE_GIG_SUCCESS, gigs});
	} catch(err) {
		yield put({type: UPDATE_GIG_FAILED, payload: err});
	}
}

export function* watchUpdateGig() {
	yield takeEvery(UPDATE_GIG_REQUEST, updateGig);
}

// Delete gig
export function* deleteGig(action) {
	try {
		const gigs = yield GigsAPI.delete(action.gigId);
		yield put({type: DELETE_GIG_SUCCESS, gigs});
	} catch(err) {
		yield put({type: DELETE_GIG_FAILED, payload: err});
	}
}

export function* watchDeleteGig() {
	yield takeEvery(DELETE_GIG_REQUEST, deleteGig);
}