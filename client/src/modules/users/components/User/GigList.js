import React from 'react'
import Gig from './../../../gigs/components/Gig/Gig';

const GigList = ({gigs, gigId, fetchGigs, fetchGigsAdditionalDetail, deleteGig}) => (
	<ul className="user-gigs">
		{gigs !== undefined &&
			gigs.map(gig =>
				<Gig key={gig.id} gig={gig} type="old" withoutCrud={true} gigId={gigId} fetchGigs={fetchGigs} fetchGigsAdditionalDetail={fetchGigsAdditionalDetail} deleteGig={deleteGig} />
			)
		}
	</ul>
);

export default GigList;