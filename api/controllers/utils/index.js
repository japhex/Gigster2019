export const checkUser = user => {
	if (!user) {
		throw new Error('You are not authenticated!')
	}
}

export const splitGigs = gigs => {
	const oldGigs = gigs.filter(gig => Date.parse(gig.songKickGig.start.date) < Date.now());
	const newGigs = gigs.filter(gig => Date.parse(gig.songKickGig.start.date) > Date.now());

	return {oldGigs, newGigs}
}

export const orderGigsByDate = gigs => {
	return gigs.sort((a, b) => Date.parse(a.songKickGig.start.date) - Date.parse(b.songKickGig.start.date))
}