import React from 'react'
import Gig from '../Gig/Gig';
import './GigList.scss';

function GigList ({gigsStatus, type, title, gigs}) {
	return (
		<div className={`gig__list gig__list--${type}`}>
			{gigsStatus === ""
				?
					<>
						<h1>{title}</h1>
						<ul>
							{gigs.map(gig =>
								<Gig key={gig.id} gig={gig} type={type} />
							)}
						</ul>
					</>
				:
					<p>Unable to retrieve gigs.</p>
			}
		</div>
	);
}

export default GigList;