export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const FETCH_USER_BY_USERNAME_REQUEST = 'FETCH_USER_BY_USERNAME_REQUEST';
export const FETCH_USER_BY_USERNAME_SUCCESS = 'FETCH_USER_BY_USERNAME_SUCCESS';
export const FETCH_USER_BY_USERNAME_FAILED = 'FETCH_USER_BY_USERNAME_FAILED';

export function fetchUsers() {
	return {
		type: FETCH_USERS_REQUEST
	};
}

export function fetchUserByUsername(username) {
	return {
		type: FETCH_USER_BY_USERNAME_REQUEST,
		username: username
	};
}