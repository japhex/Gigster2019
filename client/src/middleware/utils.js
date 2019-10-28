export const formatGig = (id, gig) => {
	const {performance, start, location, venue, type, popularity, rating} = gig
	const artist = performance.find(band => band.billingIndex === 1).displayName
	const supportsArray = [];

	performance.map((band, index) =>
		(band.billingIndex !== 1 && index < 10) &&
			supportsArray.push(band.displayName)
	)

	return {
		id,
		artist,
		date: start.date,
		time: start.time !== null ? start.time : '0',
		location: location.city,
		venue: venue.displayName,
		supports: supportsArray,
		festival: type.toLowerCase() === 'festival',
		popularity,
		rating
	}
}