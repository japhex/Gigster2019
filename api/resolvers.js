const models = require('./models')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

export default {
	User: {
		gigs: (parent) => parent.getGigs(),
	},
	Query: {
		users: () => models.user.findAll(),
		loggedInUser: async (parent, args, { user }) => user,
		user: async (parent, { username }) => await models.user.findOne({where: {username: username}, include: ['Gigs']}),
		gigs: async (parent, args, { user }) => {
			const returnUser = await models.user.findOne({where: {id: user.id}, include: ['Gigs']});
			return returnUser.Gigs;
		},
		gig: (parent, { id }) => Gig.findById(id)
	},
	Mutation: {
		async signup (root, { username, password }) {
			const user = await models.user.create({
				username,
				password: await bcrypt.hash(password, 10),
				is_admin: 0
			})

			return jsonwebtoken.sign(
				{
					id: user.id,
					username: user.username,
					is_admin: user.is_admin
				},
				process.env.JWT_SECRET,
				{ expiresIn: '1y' }
			)
		},

		async login(root, {username, password}) {
			const user = await models.user.findOne({ where: { username:username } })

			if (!user) {
				throw new Error('No user with that username')
			}

			const valid = await bcrypt.compare(password, user.password)

			if (!valid) {
				throw new Error('Incorrect password')
			}

			return jsonwebtoken.sign(
				{
					id: user.id,
					username: user.username,
					is_admin: user.is_admin
				},
				'super secret',
				{ expiresIn: '1y' }
			)
		},
		async createGig(root, { artist, date, venue }, { user }) {
			const userId = user.id

			if (!user) {
				throw new Error('You are not authenticated!')
			}

			const gig = await models.gig.create({artist:artist,date:date,venue:venue});

			let userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});
			await userWithGigs.addGig(gig.id)

			userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});

			return userWithGigs.Gigs;
		},

		async updateGig (root, { id, artist, date, venue }, { user }) {
			if (!user) {
				throw new Error('You are not authenticated!')
			}

			await models.gig.update({artist:artist, date:date, venue:venue}, {where: {id: id}});
			const userWithGigs = await models.user.findOne({where: {id: user.id}, include:['Gigs']});

			return userWithGigs.Gigs;
		},

		async deleteGig (root, { id }, { user }) {
			const userId = user.id

			if (!user) {
				throw new Error('You are not authenticated!')
			}

			let userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});
			await userWithGigs.removeGig(id);
			userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});

			return userWithGigs.Gigs;
		}
	}
};