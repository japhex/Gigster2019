import axios from 'axios';

class GigsAPI {
	static getAll() {
		return axios.get(`/api/gigs`).then(res => res.data);
	}
}

export default GigsAPI;
