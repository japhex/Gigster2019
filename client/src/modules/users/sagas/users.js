import { takeEvery, put } from 'redux-saga/effects';
import UsersAPI from '../../../api/users';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, FETCH_USER_BY_USERNAME_REQUEST, FETCH_USER_BY_USERNAME_SUCCESS, FETCH_USER_BY_USERNAME_FAILED} from '../actions/users';

//========================
// Fetch users from DB
//========================
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

//========================
// Fetch user by username from DB
//========================
export function* fetchUserByUsername({username}) {
	try {
		const user = yield UsersAPI.getUserByUsername(username);
		yield put({type: FETCH_USER_BY_USERNAME_SUCCESS, user});
	} catch(err) {
		yield put({type: FETCH_USER_BY_USERNAME_FAILED, payload: err});
	}
}

export function* watchFetchUserByUsername() {
	yield takeEvery(FETCH_USER_BY_USERNAME_REQUEST, fetchUserByUsername);
}