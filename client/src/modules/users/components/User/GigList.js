import React from 'react'

function GigList(props) {
	const {gigs} = props;

	return (
		<>
			{gigs !== undefined &&
				gigs.map(gig =>
					<p key={gig.id}>{gig.band}</p>
				)
			}
		</>
	);
}

export default GigList;