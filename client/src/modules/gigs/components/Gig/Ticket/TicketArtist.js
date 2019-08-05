import React from 'react'
import { Popularity, ArtistName } from '../../GigStyled/GigStyled'
import GigRating from "../GigRating"

export const TicketArtist = ({artist, type, popularity, festival}) => {
	const artistTransformed = festival ? `🎪 ${artist} 🎪` : artist

	return (
		<>
			<ArtistName festival={festival}>
				{artistTransformed}
			</ArtistName>
			{type === 'old' ?
				<GigRating />
				:
				<Popularity popularityAmount={popularity} />
			}
		</>
	)
}