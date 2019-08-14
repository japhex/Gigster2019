import {UserGigs} from "../../mongo_models/user_gigs"
import {Gig} from "../../mongo_models/gig"

export const checkUser = user => {
	if (!user) {
		throw new Error('You are not authenticated!')
	}
}

export const getUserGigs = async (user) => {
	const userGigs = await UserGigs.find({user:user.id});
	const gigs = await Gig.find({_id:{$in: userGigs.map(gig => gig.gig)}}).sort('songKickGig.start.date');

	return await splitGigs(userGigs, gigs)
}

export const getUserWithGigs = async (user) => {
	const userGigs = await UserGigs.find({user:user.id});
	const gigs = await Gig.find({_id:{$in: userGigs.map(gig => gig.gig)}}).sort('songKickGig.start.date');

	return {id: user._id, username: user.username, gigs: await splitGigs(userGigs, gigs)}
}

export const splitGigs = (userGigs, gigs) => {
	gigs.map(gig => {
		userGigs.map(userGig => {
			if (userGig.gig == gig.id) {
				gig.songKickGig.rating = userGig.rating
			}
		})
	})

	const oldGigs = gigs.filter(gig => Date.parse(gig.songKickGig.start.date) < Date.now());
	const newGigs = gigs.filter(gig => Date.parse(gig.songKickGig.start.date) > Date.now());

	return {oldGigs, newGigs}
}