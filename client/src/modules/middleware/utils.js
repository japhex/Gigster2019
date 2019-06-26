export const formatGig = (id, {performance, start, venue}) => {
	const artist = performance.find(band => band.billingIndex === 1).displayName

	return {
		id: id,
		artist: artist,
		date: start.date,
		venue: venue.displayName,
	}
}