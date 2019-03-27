import axios from 'axios';

class GigsAPI {
	static getAll() {
		return axios.get(`/api/gigs`).then(res => res.data);
	}

	static getAdditionalDetails() {
		return axios.get(`/api/gigs/details`).then(res => res.data);
	}

	static create(gig) {
		return axios.post(`/api/gigs/create`, gig).then(res => res.data);
	}

	static update(gig) {
		return axios.put(`/api/gigs/update/${gig.id}`, gig).then(res => res.data);
	}

	static delete(gigId) {
		return axios.delete(`/api/gigs/delete/${gigId}`).then(res => res.data);
	}
}

export default GigsAPI;
