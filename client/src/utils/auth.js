import * as jwt from 'jsonwebtoken';

class Auth {

	/**
	 * Authenticate a user. Save a token string in Local Storage
	 *
	 * @param {string} token
	 */
	static authenticateUser(token) {
		localStorage.setItem('token', token);
	}

	/**
	 * Check if a user is authenticated via local storage token.
	 * the JSON web token should contain an accessible expiry date.
	 *
	 * @todo consider also using an interceptor and delete token for any 401 and redirect
	 * to login route
	 *
	 * @returns {boolean}
	 */
	static async isUserAuthenticated() {

		const token = localStorage.getItem('token');

		if(!token) {
			return false;
		}

		const decodedToken = jwt.decode(token);

		// Expiry date in millis
		const expiryDate = new Date(decodedToken.exp * 1000);

		if(expiryDate && (Date.now() <= expiryDate)) {
			return true;
		}

		return true;
	}

	/**
	 * Deauthenticate a user. Remove a token from Local Storage.
	 *
	 */
	static deauthenticateUser() {
		localStorage.removeItem('token');
	}

	/**
	 * Get a token value.
	 *
	 * @returns {string}
	 */
	static getToken() {
		// return localStorage.getItem('token');

		// TODO see if we can wire up store instead
		return JSON.parse(localStorage.state).user.token;
	}
}

export default Auth;
