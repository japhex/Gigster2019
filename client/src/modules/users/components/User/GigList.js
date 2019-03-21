import React from 'react'
import Gig from './../../../gigs/components/Gig/Gig';

function GigList({gigs}) {
	return (
		<ul className="user-gigs">
			{gigs !== undefined &&
				gigs.map(gig =>
					<Gig key={gig.id} gig={gig} type="old" withoutCrud={true} />
				)
			}
		</ul>
	);
}

export default GigList;