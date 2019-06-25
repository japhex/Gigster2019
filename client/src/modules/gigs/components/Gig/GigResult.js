import React from 'react'
import moment from 'moment'
import {GigResult, GigResultHeader, GigResultFooter, Bands, Date, Venue, Location, Strong, Festival} from './GigSearchResultsStyled'

const GigResultParent = ({gig}) => {
	// onclick, save gig JSON in DB

	return (
		<GigResult>
			<GigResultHeader>
				<Bands>
					{gig.performance.map(band =>
						band.billingIndex === 1 &&
						<h1>
							{band.displayName}
						</h1>
					)}
					<Venue>
						{gig.venue.displayName}
					</Venue>
					<Location>
						{gig.location.city}
					</Location>
				</Bands>
				<Date>
					{moment(gig.start.date).format("MMM Do YYYY")}
				</Date>
			</GigResultHeader>
			{gig.performance.length > 1 &&
				<GigResultFooter>
					<Strong>Playing with:</Strong> &nbsp;
					{gig.performance.map((band, index) =>
						(band.billingIndex !== 1 && index < 10) &&
						<span>{band.displayName}{(index < 9 && index !== gig.performance.length - 1) && ', '}{index === 9 && '...'}</span>
					)}
					{(gig.type.toLowerCase()) === 'festival' &&
						<Festival>[FESTIVAL]</Festival>
					}
				</GigResultFooter>
			}
		</GigResult>
	)
}

export default GigResultParent;