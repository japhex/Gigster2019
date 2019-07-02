import React from 'react'
import GigHeader from './GigHeader/GigHeader'
import GigFooter from './GigFooter/GigFooter'
import GigBody from "./GigBody/GigBody"

const DisplayGig = ({gig, type, songkickGig, withoutCrud, switchEditMode}) => {
	return (
		<>
			<GigHeader gig={gig} type={type}/>
			<GigBody gig={gig} />
			{!withoutCrud &&
				<GigFooter gigId={gig.id} songkickGig={songkickGig} switchEditMode={switchEditMode} />
			}
		</>
	)
}

export default DisplayGig;