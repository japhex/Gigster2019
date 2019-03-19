import axios from 'axios';

class UsersAPI {
	static getAll() {
		return axios.get(`/api/users/all`).then(res => res.data);
	}
}

export default UsersAPI;
