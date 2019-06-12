const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');

// Get all users
export const apiGetUsers = async () => {
	try {
		return await models.user.findAll()
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Get user by username
export const apiGetUserByUsername = async (username) => {
	try {
		return await models.user.findOne({where: {username: username}, include: ['Gigs']})
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Search users by username
export const apiSearchUsersByUsername = async (username) => {
	try {
		return await models.user.findAll({where: {username: {[Op.like] : `%${username}%`}}})
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}