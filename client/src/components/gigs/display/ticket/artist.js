import React from 'react'
import { ArtistName, Festival } from '../../styles/gigStyled'
import Rating from "../rating"

export const Artist = ({id, artist, type, festival, activeRating}) => (
	<>
		{/*{festival && <Festival>🎪</Festival>}*/}
		<ArtistName festival={festival}>
			{artist}
		</ArtistName>
		{type === 'old' &&
			<Rating gigId={id} activeRating={activeRating} />
		}
	</>
)