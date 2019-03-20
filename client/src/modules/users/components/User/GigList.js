import React from 'react'
import Gig from './../../../gigs/components/Gig/Gig';

function GigList({gigs}) {
	return (
		<>
			{gigs !== undefined &&
				gigs.map(gig =>
					<Gig key={gig.id} gig={gig} type="old" />
				)
			}
		</>
	);
}

export default GigList;