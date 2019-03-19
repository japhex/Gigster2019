import { takeEvery, put } from 'redux-saga/effects';
import UsersAPI from '../../../api/users';
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../actions/users';

// Fetch users from DB
export function* fetchUsers(action) {
	try {
		const users = yield UsersAPI.getAll(action.users);
		yield put({type: FETCH_USERS_SUCCESS, users});
	} catch(err) {
		yield put({type: FETCH_USERS_FAILED, payload: err});
	}
}

export function* watchFetchUsers() {
	yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}