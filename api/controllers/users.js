import {User} from '../models/user'
import {checkUser, getUserWithGigs} from "./utils"

// Get all users
export const apiGetUsers = async () => {
	try {
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

// Update user spotify hash
export const apiUpdateSpotifyHash = async (userId, hash) => {
	try {
		const user = await User.findOneAndUpdate({_id: userId}, {spotify_hash: hash});
		return getUserWithGigs(user)
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}