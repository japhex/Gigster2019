import axios from 'axios';
import history from './../../utils/routing';
import { getStore } from '../redux/store';

/**
 * Ensure every request contains a valid token
 */
axios.interceptors.request.use((config) => {
	const state = getStore().getState();
	const token = state.login.user.token;

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