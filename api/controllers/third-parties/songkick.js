const rp = require('request-promise');
const config = require('../../config/songkick.json');

module.exports = {
	async searchArtist(req, res) {
		try {
			return await rp.get(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${config.apiKey}&query=${req.body.artist}&page=1`);
		} catch(err) {
			res.status(500);
			return {error:err};
		}
	},
	async searchVenue(req, res) {
		try {
			return await rp.get(`https://api.songkick.com/api/3.0/search/venues.json?apikey=${config.apiKey}&query=${req.body.venue}&page=1`);
		} catch(err) {
			res.status(500);
			return {error:err};
		}
	},
	async searchEvent(req, res) {
		const artist = req.body.artist;
		const venue = req.body.venue;

		try {
			return await rp.get(`https://api.songkick.com/api/3.0/events.json?apikey=${config.apiKey}${artist !== undefined && `&artist_name=${artist}`}${venue !== undefined && `&location=${venue}`}`)
		} catch(err) {
			res.status(500);
			return {error:err};
		}
	}
};
