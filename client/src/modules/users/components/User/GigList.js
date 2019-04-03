import React from 'react'
import Gig from './../../../gigs/components/Gig/Gig';

const GigList = ({gigs}) => (
	<ul className="user-gigs">
		{gigs !== undefined &&
			gigs.map(gig =>
				<Gig key={gig.id} gig={gig} type="old" withoutCrud={true} />
			)
		}
	</ul>
);

export default GigList;