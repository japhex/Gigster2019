import React from 'react'
import { Popularity } from '../../GigStyled/GigStyled'
import GigRating from "../GigRating"

export const TicketArtist = ({artist, type, popularity}) => (
	<>
		<h1>
			{artist}
		</h1>
		{type === 'old' ?
			<GigRating />
			:
			<Popularity popularityAmount={popularity} />
		}
	</>
)