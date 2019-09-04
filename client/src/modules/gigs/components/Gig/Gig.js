import React, {useState} from 'react'
import DisplayGig from "./DisplayGig"
import { GigContainer, GigStyled, Ticket, TicketLeft, TicketBottom, Title, Details, PopularityContainer, Popularity } from '../GigStyled/GigStyled'
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
				{/*{type !== 'old' &&*/}
					{/*<GigDelete gigId={id}/>*/}
				{/*}*/}
				<Ticket>
					<TicketLeft>
						<Title type={type}>
							<TicketArtist id={id} activeRating={rating} artist={artist} type={type} festival={festival} />
							<TicketSupport supports={supports} />
							{/*{type !== 'old' &&*/}
								{/*<PopularityContainer>*/}
								{/*	Popularity: <Popularity popularityAmount={popularityAmount}/>*/}
								{/*</PopularityContainer>*/}
							{/*}*/}
						</Title>
						<Details>
							<TicketDate gigDate={date} />
							<TicketVenue location={location} venue={venue} time={time} />
						</Details>
					</TicketLeft>
				</Ticket>
				{/*<DisplayGig gig={gigFormatted} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} songkickGig={songkickGig} />*/}
			</GigStyled>
		</GigContainer>
	)
}

export default Gig;