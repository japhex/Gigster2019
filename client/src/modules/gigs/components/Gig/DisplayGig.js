import React from 'react'
import GigHeader from './GigHeader/GigHeader'
import GigFooter from './GigFooter/GigFooter'

const DisplayGig = ({gig, type, gigSource, withoutCrud, switchEditMode}) => {
	return (
		<>
			<GigHeader gig={gig} type={type}/>
			{/* Format into gigBody */}
			{gig.supports &&
				gig.supports.map((band, index) =>
					<span>{band}{(index < 9 && index !== gig.supports.length - 1) && ', '}{index === 9 && '...'}</span>
				)
			}
			{gig.festival &&
				<>Festival</>
			}
			{!withoutCrud &&
				<GigFooter gigId={gig.id} gigSource={gigSource} switchEditMode={switchEditMode} />
			}
		</>
	)
}

export default DisplayGig;