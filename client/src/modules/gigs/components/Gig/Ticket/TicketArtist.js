import React from 'react'
import { Popularity, ArtistName } from '../../GigStyled/GigStyled'
import GigRating from "../GigRating"

export const TicketArtist = ({id, artist, type, popularity, festival, activeRating}) => {
	const artistTransformed = festival ? `🎪 ${artist} 🎪` : artist

	return (
		<>
			<ArtistName festival={festival}>
				{artistTransformed}
			</ArtistName>
			{type === 'old' ?
				<GigRating gigId={id} activeRating={activeRating} />
				:
				<Popularity popularityAmount={popularity} />
			}
		</>
	)
}