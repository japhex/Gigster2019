import React from 'react'

const GigBody = ({gig}) => (
	<>
		{gig.supports &&
			gig.supports.map((band, index) =>
				<span>{band}{(index < 9 && index !== gig.supports.length - 1) && ', '}{index === 9 && '...'}</span>
			)
		}
		{gig.festival &&
			<>Festival</>
		}
	</>
)

export default GigBody;