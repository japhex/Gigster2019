import React from 'react'
import Gig from '../Gig/Gig';
import './GigList.scss';

const GigList = ({gigsStatus, type, title, gigs, loadingAdditionalContent}) => (
	<div className={`gig__list gig__list--${type}`}>
		{gigsStatus === ""
			?
				<>
					<h1>{title}</h1>
					<ul>
						{gigs.map(gig =>
							<Gig key={gig.id} gig={gig} type={type} loadingAdditionalContent={loadingAdditionalContent} />
						)}
					</ul>
				</>
			:
				<p>Unable to retrieve gigs.</p>
		}
	</div>
);

export default GigList;