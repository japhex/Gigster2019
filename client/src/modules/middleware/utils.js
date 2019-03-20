export function splitGigs(gigs) {
	const oldGigs = gigs.filter(gig => Date.parse(gig.date) < Date.now());
	const newGigs = gigs.filter(gig => Date.parse(gig.date) > Date.now());

	return {oldGigs:oldGigs, newGigs: newGigs};
}