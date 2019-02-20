import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import AuthAPI from './../../api/auth';
import {setUser} from './actions';

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from "./actions";

// Login action
//
export function* fetchLogin(action) {
	try {
		const data = yield AuthAPI.login(action.payload);
		const payload = { token: data.token, username: data.username, userId: data.userId };

		yield put(setUser(data.username, data.userId, data.token));
		yield put({type: LOGIN_SUCCESS, payload });
		yield put(push('/gigs'));
	} catch (error) {
		yield put({type: LOGIN_FAILED, payload: error.message});
	}
}

export function* watchLogin() {
	yield takeEvery(LOGIN_REQUEST, fetchLogin);
}