import React, {useState} from 'react'
import DisplayGig from "./DisplayGig"
import { GigContainer, GigStyled, Ticket, TicketLeft, TicketBottom, Title, Details } from '../GigStyled/GigStyled'
import {formatGig} from './../../../middleware/utils'
import {TicketDate} from "./Ticket/TicketDate"
import {TicketVenue} from "./Ticket/TicketVenue"
import {TicketSupport} from "./Ticket/TicketSupport"
import {TicketArtist} from "./Ticket/TicketArtist"
import GigDelete from "./GigFooter/GigDelete"

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);

	const gigFormatted = formatGig(gig.id, gig.songKickGig)
	const popularityAmount = Math.round(gigFormatted.popularity * 100)
	const {id, artist, supports, festival, location, date, venue, time, rating } = gigFormatted

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<GigContainer type={type}>
			<GigStyled>
				<Ticket>
					<TicketLeft>
						<Title>
							<TicketArtist id={id} activeRating={rating} artist={artist} popularity={popularityAmount} type={type} festival={festival} />
							<TicketSupport supports={supports} />
						</Title>
						<Details>
							<TicketDate gigDate={date} />
							<TicketVenue location={location} venue={venue} time={time} />
						</Details>
					</TicketLeft>
					<TicketBottom>
						<GigDelete gigId={id} />
					</TicketBottom>
				</Ticket>
				{/*<DisplayGig gig={gigFormatted} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} songkickGig={songkickGig} />*/}
			</GigStyled>
		</GigContainer>
	)
}

export default Gig;