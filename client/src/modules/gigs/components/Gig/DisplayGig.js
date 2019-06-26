import React from 'react'
import GigHeader from './GigHeader/GigHeader'
import GigFooter from './GigFooter/GigFooter'

const DisplayGig = ({gig, type, gigSource, withoutCrud, switchEditMode}) => {
	return (
		<>
			<GigHeader gig={gig} type={type}/>
			{!withoutCrud &&
				<GigFooter gigId={gig.id} gigSource={gigSource} switchEditMode={switchEditMode} />
			}
		</>
	)
}

export default DisplayGig;