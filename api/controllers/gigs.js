const models = require('../models');
const rp = require('request-promise');

module.exports = {
	async getAll(req, res) {
		let newGigs = [];
		try {
			const gigs = await models.gig.findAll({where: {userId: req.user.id}});

			for (let i=0; i < gigs.length; i++) {
				const obj = gigs[i].toJSON();
				obj.artistInfo = await rp.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${gigs[i].band}&api_key=61726d01845437a55a440275a1b4e5b9&format=json`);
				obj.artistInfo = JSON.parse(obj.artistInfo);

				newGigs.push(obj);
			}

			return newGigs;
		} catch(err){
			console.log(err);
		}
	}
};
