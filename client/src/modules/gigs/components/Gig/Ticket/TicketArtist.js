import React from 'react'
import { ArtistName, Festival } from '../../GigStyled/GigStyled'
import GigRating from "../GigRating"

export const TicketArtist = ({id, artist, type, festival, activeRating}) => (
	<>
		{festival && <Festival>🎪</Festival>}
		<ArtistName festival={festival}>
			{artist}
		</ArtistName>
		{type === 'old' &&
			<GigRating gigId={id} activeRating={activeRating} />
		}
	</>
)