const models = require('../models');
const rp = require('request-promise');
import {checkUser} from './utils'
import {songkick} from '../config/songkick';

module.exports = {
	async getAdditionalGigDetail(req, res) {
		const newGigs = [];
		try {
			const user = await models.user.findOne({where: {id: req.user.id}, include:['Gigs']});

			for (let i=0; i < user.Gigs.length; i++) {
				const gig = user.Gigs[i];
				const obj = gig.toJSON();

				obj.artistInfo = await rp.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${gig.artist}&api_key=61726d01845437a55a440275a1b4e5b9&format=json`);

				if (obj.artistInfo !== '') {
					obj.artistInfo = JSON.parse(obj.artistInfo);
				} else {
					delete obj.artistInfo;
				}

				newGigs.push(obj);
			}

			return newGigs;
		} catch(err){
			res.status(500);
			return {error:err};
		}
	}
};

// Get all gigs for user
export const apiGetGigs = async (user) => {
	try {
		checkUser(user);

		const returnUser = await models.user.findOne({where: {id: user.id}, include: ['Gigs']});
		return returnUser.Gigs;
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Create gig
export const apiCreateGig = async ({ artist, date, venue }, user) => {
	try {
		checkUser(user);

		const userId = user.id

		const gig = await models.gig.create({artist:artist,date:date,venue:venue});

		let userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});
		await userWithGigs.addGig(gig.id)

		userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});

		return userWithGigs.Gigs;
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Update gig
export const apiUpdateGig = async ({ id, artist, date, venue }, user) => {
	try {
		checkUser(user);

		await models.gig.update({artist:artist, date:date, venue:venue}, {where: {id: id}});
		const userWithGigs = await models.user.findOne({where: {id: user.id}, include:['Gigs']});

		return userWithGigs.Gigs;
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Delete gig
export const apiDeleteGig = async ({ id }, user) => {
	try {
		checkUser(user);

		const userId = user.id

		let userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});
		await userWithGigs.removeGig(id);
		userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});

		return userWithGigs.Gigs;
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}

// Search gig
export const apiSearchGig = async ({ artist }, user) => {
	try {
		checkUser(user);
		const songkickArtist = await rp.get(`https://api.songkick.com/api/3.0/events.json?apikey=${songkick.apiKey}&artist_name=${artist}`);

		return JSON.parse(songkickArtist).resultsPage.results.event;
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}