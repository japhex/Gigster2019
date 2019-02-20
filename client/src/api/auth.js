import axios from 'axios';

class AuthAPI {
	static login(payload) {
		return axios.post(`/api/login`, payload).then(response => response.data);
	}
}

export default AuthAPI;
