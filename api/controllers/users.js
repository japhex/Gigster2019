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
	async getUser(req, res) {
		try {
			// FindAll instead of FindOne so we can still call sanitizeUsers on an array
			const user = await models.user.findAll({where:{username:req.params.username}, include:['Gigs']});

			// Only 1 array item will ever exist for 1 user, return first property
			return await this.sanitizeUsers(user)[0];
		} catch(err){
			console.log(err);
			res.status(500);
			return {error:err};
		}
	},
	sanitizeUsers(users) {
		users = users.map(({username, createdAt, Gigs}) => ({...{}, username, createdAt, Gigs}))

		return users;
	}
};
