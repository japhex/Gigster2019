const models = require('./models')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

export default {
	User: {
		gigs: (parent) => parent.getGigs(),
	},
	Query: {
		users: () => models.user.findAll(),
		user: (parent, { username }) => models.user.findOne({where: {username: username}, include: ['Gigs']}),
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
			console.log('here')
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
		async createGig(root, { title, content }, { user }) {
			if (!user) {
				throw new Error('You are not authenticated!')
			}

			// return Gig.create({
			// 	user_id: user.id,
			// 	title,
			// 	content
			// })
		},

		async updateGig (root, { id, title, content }, { user }) {
			if (!user) {
				throw new Error('You are not authenticated!')
			}

			const gig = await models.gig.findById(id)

			if (!gig) {
				throw new Error('No post found')
			}

			// await post.update({ title, content })

			return gig
		}
	}
};