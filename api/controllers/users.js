const models = require('../models');

module.exports = {
	async getAll(req, res) {
		try {
			const users = await models.user.findAll({include:['Gigs']});

			return await this.sanitizeUsers(users);
		} catch(err){
			console.log(err);
			res.status(500);
			return {error:err};
		}
	},
	sanitizeUsers(users) {
		users = users.map(({username, createdAt}) => ({...{}, username, createdAt}))

		return users;
	}
};
