import React from 'react'
import GigHeader from './GigHeader/GigHeader'
import GigFooter from './GigFooter/GigFooter'

const DisplayGig = ({gig, type, withoutCrud, switchEditMode}) => {
	return (
		<>
			<GigHeader gig={gig} type={type}/>
			{/*
				X other people on Gigster are attending this show!
				Can add this once we linked to actual songkick gig ID's rather than storing gigs internally..!!!
				Exciting.
			*/}
			{/*{loadingAdditionalContent ?*/}
			{/*	<Loader />*/}
			{/*	:*/}
			{/*	<>*/}
			{/*		<GigTags gig={gig} />*/}
			{/*	</>*/}
			{/*}*/}
			{/* Only let user edit their gigs */}
			{!withoutCrud &&
				<GigFooter gigId={gig.id} switchEditMode={switchEditMode} />
			}
		</>
	)
}

export default DisplayGig;