import React, {useState} from 'react'
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"
import {StyledBody} from 'baseui/card';
import { GigContainer, GigStyled, Ticket, TicketLeft, Title, Details } from '../GigStyled/GigStyled'
import {formatGig} from './../../../middleware/utils'
import {TicketDate} from "./Ticket/TicketDate"
import {TicketVenue} from "./Ticket/TicketVenue"
import {TicketSupport} from "./Ticket/TicketSupport"
import {TicketArtist} from "./Ticket/TicketArtist"

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);
	const songkickGig = JSON.parse(gig.songkickJson)
	const gigFormatted = formatGig(gig.id, songkickGig)
	const popularityAmount = Math.round(gigFormatted.popularity * 100)

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<GigContainer type={type}>
			<GigStyled>
				<StyledBody>
					<Ticket>
						<TicketLeft>
							<Title>
								<TicketArtist artist={gigFormatted.artist} popularity={popularityAmount} type={type} festival={gigFormatted.festival} />
								<TicketSupport supports={gigFormatted.supports} />
							</Title>
							<Details>
								<TicketDate gigDate={gigFormatted.date} />
								<TicketVenue location={gigFormatted.location} venue={gigFormatted.venue} time={gigFormatted.time} />
							</Details>
						</TicketLeft>
					</Ticket>
					{!songkickGig &&
						<UpdateGig initialValues={gigFormatted} switchEditMode={switchEditMode} editMode={editMode}/>
					}
					{/*<DisplayGig gig={gigFormatted} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} songkickGig={songkickGig} />*/}
				</StyledBody>
			</GigStyled>
		</GigContainer>
	)
}

export default Gig;