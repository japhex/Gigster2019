import axios from 'axios';

class SearchAPI {
	static getArtistSearch(artist) {
		return axios.post(`/api/search/artist`, {artist:artist}).then(res => res.data);
	}

	static getVenueSearch(venue) {
		return axios.post(`/api/search/venue`, {venue:venue}).then(res => res.data);
	}
}

export default SearchAPI;
