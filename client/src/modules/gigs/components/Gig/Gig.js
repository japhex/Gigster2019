import React, {useState} from 'react'
import moment from 'moment';
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"
import GigRating from "./GigRating"
import {StyledBody} from 'baseui/card';
import {GigContainer, GigStyled, Ticket, TicketLeft, Popularity, StubSupport, Title, Details, Date, Day, Month, Year, Venue, Time} from './GigStyled'
import {formatGig} from './../../../middleware/utils'

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);
	const songkickGig = gig.songkickJson !== null ? JSON.parse(gig.songkickJson) : null
	const gigFormatted = songkickGig ? formatGig(gig.id, JSON.parse(gig.songkickJson)) : gig
	const gigTime = gigFormatted.time.substring(0,5)
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
								<h1>
									{gigFormatted.artist}
								</h1>
								<Popularity popularityAmount={popularityAmount}>
								</Popularity>
								<StubSupport>
									{gigFormatted.supports && gigFormatted.supports.length > 0 &&
										<>
											<p>
												w/ support from:
											</p>
											{
												gigFormatted.supports.map((band, index) =>
												<span>{band}{(index < 9 && index !== gigFormatted.supports.length - 1) && ', '}{index === 9 && '...'}</span>
												)
											}
										</>
									}
								</StubSupport>
							</Title>
							<Details>
								<Date>
									<Month>
										{moment(gigFormatted.date).format("MMM")}
									</Month>
									<Day>
										{moment(gigFormatted.date).format("D")}
									</Day>
									<Year>
										{moment(gigFormatted.date).format("YYYY")}
									</Year>
								</Date>
								<Venue>
									<strong>{gigFormatted.venue}</strong>
									<i>{gigFormatted.location}</i>
									<Time>
										{gigTime !== '0' &&
											<>{gigTime} PM</>
										}
									</Time>
								</Venue>
							</Details>
						</TicketLeft>
					</Ticket>
					{type === 'old' &&
						<GigRating />
					}
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