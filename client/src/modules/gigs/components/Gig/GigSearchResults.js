import React from 'react'
import {ResultsList} from './GigSearchResultsStyled'
import GigResultParent from "../GigResult/GigResult"

const GigSearchResults = ({gigs}) => (
	<ResultsList>
		{gigs !== null &&
			gigs.map(gig =>
				<GigResultParent gig={gig} />
			)
		}
	</ResultsList>
)

export default GigSearchResults;