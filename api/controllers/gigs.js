const models = require('../models');
const rp = require('request-promise');
import {checkUser, splitGigs, orderGigsByDate} from './utils'
import {songkick} from '../config/songkick';

// Get all gigs for user
export const apiGetGigs = async (user) => {
	try {
		checkUser(user);

		const returnUser = await models.user.findOne({where: {id: user.id}, include: ['Gigs']});
		const Gigs = returnUser.Gigs

		orderGigsByDate(Gigs)
		return await splitGigs(Gigs)
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

// Create songkick gig
export const apiCreateSongkickGig = async ({ songkickId, songkickJson}, user) => {
	try {
		checkUser(user);

		const userId = user.id
		let userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});
		const existingGig = await models.gig.findOne({where: {songkickId: songkickId}});

		if (existingGig === null) {
			const gig = await models.gig.create({
				date: songkickJson.start.date,
				songkickId: songkickId,
				songkickJson: JSON.stringify(songkickJson)
			});
			await userWithGigs.addGig(gig.id)
		} else {
			await userWithGigs.addGig(existingGig.id)
		}

		userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});

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