import axios from 'axios';
import history from './../../utils/routing';
import { getStore } from '../redux/store';

/**
 * Ensure every request contains the authentication details.
 *
 * For finer grained control you can create instances of axios
 */
axios.interceptors.request.use((config) => {
	const state = getStore().getState();
	const token = state.login.user.token;

	// TODO if token is null or undefined then we should cancel reqeust and show them the login here!
	// Unless its to the login api
	if(config.url !== '/login' && !token) {
		history.push('/login');
		return {
			...config,
			cancelToken: axios.CancelToken((cancel) => cancel('Cancel request with no access token'))
		};
	}

	config.headers.Authorization = `bearer ${token}`;
	config.headers.FromReact = true;
	config.withCredentials = true;

	if(config.url !== '/login') {
		// Must have a token and user otherwise direct to login and keep them out of the app pages

	} else if(config.url !== '/login') {
		// Must have a context otherwise direct to context selection page
	}

	return config;
}, (err) => {
	console.log('err', err);
});

axios.interceptors.response.use((response) => {
	return response
}, (err) => {
	console.log(err);
	if(err.response.status === 401) {
		history.push('/login');
	}
	return Promise.reject(err.response.data);
});