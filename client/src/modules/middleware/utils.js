import React from "react"

export const formatGig = (id, {performance, start, venue, type}) => {
	const artist = performance.find(band => band.billingIndex === 1).displayName
	const supportsArray = [];

	performance.map((band, index) =>
		(band.billingIndex !== 1 && index < 10) &&
			supportsArray.push(band.displayName)
	)

	return {
		id: id,
		artist: artist,
		date: start.date,
		venue: venue.displayName,
		supports: supportsArray,
		festival: type.toLowerCase() === 'festival'
	}
}