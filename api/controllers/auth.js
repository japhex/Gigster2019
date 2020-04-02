const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
import {User} from '../models/user'

// Signup
export const apiSignup = async ({ username, password }) => {
	const user = await new User({username: username, password: await bcrypt.hash(password, 10)})
	user.save()

	return jsonwebtoken.sign(
		{
			id: user.id,
			username: user.username
		},
		'super secret',
		{ expiresIn: '1y' }
	)
}

// Login
export const apiLogin = async ({username, password}) => {
	const user = await User.findOne({ username: username })
	if (!user) throw new Error('No user with that username')

	const valid = await bcrypt.compare(password, user.password)
	if (!valid) throw new Error('Incorrect password')

	return jsonwebtoken.sign(
		{
			id: user._id,
			username: user.username,
			spotify_hash: user.spotify_hash
		},
		'super secret',
		{ expiresIn: '1d' }
	)
}