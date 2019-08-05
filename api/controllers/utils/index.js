export const checkUser = user => {
	if (!user) {
		throw new Error('You are not authenticated!')
	}
}

export const splitGigs = gigs => {
	const oldGigs = gigs.filter(gig => Date.parse(JSON.parse(gig.songkickJson).start.date) < Date.now());
	const newGigs = gigs.filter(gig => Date.parse(JSON.parse(gig.songkickJson).start.date) > Date.now());

	return {oldGigs, newGigs}
}