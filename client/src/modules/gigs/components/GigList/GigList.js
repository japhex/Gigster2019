import React from 'react'
import Gig from '../Gig/Gig';
import './GigList.scss';

const GigList = ({type, title, gigs, withoutCrud}) => (
	<div className={`gig__list gig__list--${type}`}>
		<>
			<h1>{title}</h1>
			{gigs.length > 0 ?
				<ul>
					{gigs.map(gig =>
						<Gig key={gig.id} gig={gig} type={type} withoutCrud={withoutCrud} />
					)}
				</ul>
			:
				<>
					No {title}
				</>
			}
		</>
	</div>
);

export default GigList;