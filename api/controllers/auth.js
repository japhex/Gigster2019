const models = require('../models');
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

// Signup
export const apiSignup = async ({ username, password }) => {
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
}

// Login
export const apiLogin = async ({username, password}) => {
	const user = await models.user.findOne({ where: { username:username } })

	// Check user exists by username
	if (!user) {
		throw new Error('No user with that username')
	}

	const valid = await bcrypt.compare(password, user.password)

	// Check password is valid
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
}