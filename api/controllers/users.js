const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');
import {User} from '../mongo_models/user'

// Get all users
export const apiGetUsers = async () => {
	try {
		// get all the users
		const users = await User.find();

		console.log('from mongo:')
		console.log(users)

		return await models.user.findAll()
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Get user by username
export const apiGetUserByUsername = async (username) => {
	try {
		const user = await User.findOne({username: username});
		// Need to get users gigs from Mongo, too
		console.log('from mongo:')
		console.log(user)

		return await models.user.findOne({where: {username: username}, include: ['Gigs']})
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Search users by username
export const apiSearchUsersByUsername = async (username) => {
	try {
		const users = User.find({username: { $regex: '.*' + username + '.*' } })

		console.log('from mongo:')
		console.log(users)

		return await models.user.findAll({where: {username: {[Op.like] : `%${username}%`}}})
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

export const apiGetGigsByUser = async (userId) => {
	try {
		const user = await User.findOne({id: userId});

		console.log('from mongo:')
		console.log(user)

		return await models.user.findOne({where: {id: userId}, include: ['Gigs']})
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}