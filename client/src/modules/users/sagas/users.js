import { takeEvery, put } from 'redux-saga/effects';
import UsersAPI from '../../../api/users';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../actions/users';

// Fetch users from DB
export function* fetchUsers() {
	try {
		const users = yield UsersAPI.getAll();
		yield put({type: FETCH_USERS_SUCCESS, users});
	} catch(err) {
		yield put({type: FETCH_USERS_FAILED, payload: err});
	}
}

export function* watchFetchUsers() {
	yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}