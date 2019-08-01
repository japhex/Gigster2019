import React from 'react'
import { Time, Venue } from '../../GigStyled/GigStyled'

export const TicketVenue = ({venue, location, time}) => (
	<Venue>
		<strong>{venue}</strong>
		<i>{location}</i>
		<Time>
			{time !== '0' &&
				<>{time} PM</>
			}
		</Time>
	</Venue>
)