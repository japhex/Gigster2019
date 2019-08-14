import {User} from '../mongo_models/user'
import {getUserWithGigs} from "./utils"

// Get all users
export const apiGetUsers = async () => {
	try {
		// get all the users
		return await User.find();
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Get user by username
export const apiGetUserByUsername = async (username) => {
	try {
		const user = await User.findOne({username: username});
		return getUserWithGigs(user)
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Search users by username
export const apiSearchUsersByUsername = async (username) => {
	try {
		return await User.find({username: { $regex: '.*' + username + '.*' } })
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Get gigs by UserID
export const apiGetGigsByUser = async (userId) => {
	try {
		const user = await User.findOne({_id: userId});
		return getUserWithGigs(user)
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}