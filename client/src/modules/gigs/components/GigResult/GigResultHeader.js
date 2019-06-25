import React from 'react'
import moment from 'moment/moment'
import {GigResultHeader, Bands, Date, Venue, Location} from '../Gig/GigSearchResultsStyled'

const GigResultHeaderParent = ({gig}) => (
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
)

export default GigResultHeaderParent;