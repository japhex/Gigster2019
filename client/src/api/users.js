import axios from 'axios';

class UsersAPI {
	static getAll() {
		return axios.get(`/api/users/all`).then(res => res.data);
	}

	static getUser(username) {
		return axios.get(`/api/users/${username}`).then(res => res.data);
	}
}

export default UsersAPI;
