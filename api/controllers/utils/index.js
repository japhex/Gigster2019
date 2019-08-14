import {UserGigs} from "../../mongo_models/user_gigs"
import {Gig} from "../../mongo_models/gig"

export const checkUser = user => {
	if (!user) {
		throw new Error('You are not authenticated!')
	}
}

export const getUserGigs = async (user) => {
	const userGigs = await UserGigs.find({user:user.id});
	const gigs = await Gig.find({_id:{$in: userGigs.map(gig => gig.gig)}});

	return await splitGigs(gigs)
}

export const splitGigs = gigs => {
	const oldGigs = gigs.filter(gig => Date.parse(gig.songKickGig.start.date) < Date.now());
	const newGigs = gigs.filter(gig => Date.parse(gig.songKickGig.start.date) > Date.now());

	return {oldGigs, newGigs}
}

export const orderGigsByDate = gigs => {
	return gigs.sort((a, b) => Date.parse(a.songKickGig.start.date) - Date.parse(b.songKickGig.start.date))
}