const models = require('../models');

module.exports = {
	async getAll(req, res) {
		try {
			return await models.gig.findAll({where: {userId: req.user.id}});
		} catch(err){
			console.log(err);
		}
	}
};
