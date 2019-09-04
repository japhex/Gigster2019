import React from 'react'
import GigFooter from './GigFooter/GigFooter'
import GigBody from "./GigBody/GigBody"

const DisplayGig = ({gig, type, songkickGig, withoutCrud, switchEditMode}) => {
	return (
		<>
			<GigBody gig={gig} />
			{!withoutCrud &&
				<GigFooter songkickGig={songkickGig} switchEditMode={switchEditMode} />
			}
		</>
	)
}

export default DisplayGig;