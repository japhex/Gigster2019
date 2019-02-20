export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const SET_USER = 'SET_USER';

export function login(payload) {
	return {
		type: LOGIN_REQUEST,
		payload: { payload }
	};
};

export function setUser(username, userId, token) {
	return {
		type: SET_USER,
		payload: { username, userId, token }
	};
};