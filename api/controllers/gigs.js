const models = require('../models');
const rp = require('request-promise');

module.exports = {
	async getAll(req, res) {
		try {
			const user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});
			return user.Gigs;
		} catch(err){
			res.status(500);
			return {error:err};
		}
	},
	async getAdditionalGigDetail(req, res) {
		const newGigs = [];
		try {
			const user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});

			for (let i=0; i < user.Gigs.length; i++) {
				const gig = user.Gigs[i];
				const obj = gig.toJSON();

				obj.artistInfo = await rp.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${gig.artist}&api_key=61726d01845437a55a440275a1b4e5b9&format=json`);

				if (obj.artistInfo !== '') {
					obj.artistInfo = JSON.parse(obj.artistInfo);
				} else {
					delete obj.artistInfo;
				}

				newGigs.push(obj);
			}

			return newGigs;
		} catch(err){
			res.status(500);
			return {error:err};
		}
	},
	async createGig(req, res) {
		try {
			const gig = await models.gig.create(req.body);
			let user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});
			await user.addGig(gig.id)

			user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});

			return user.Gigs;
		} catch(err){
			res.status(500);
			return {error:err};
		}
	},
	async updateGig(req, res) {
		try {
			await models.gig.update(req.body, {where: {id: req.params.id}});
			const user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});

			return user.Gigs;
		} catch(err){
			res.status(500);
			return {error:err};
		}
	},
	async deleteGig(req, res) {
		try {
			let user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});
			await user.removeGig(req.params.id);
			user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});

			return this.getAdditionalGigDetail(req, res);
		} catch(err){
			res.status(500);
			return {error:err};
		}
	}
};
