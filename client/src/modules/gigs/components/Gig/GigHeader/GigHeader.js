import React from 'react'
import moment from 'moment';

const GigHeader = ({gig, type}) => {
	const onTour = (gig.artistInfo !== undefined && gig.artistInfo.artist !== undefined) && type !== 'new' ? <span className="gig__on-tour">{gig.artistInfo.artist.ontour && 'On tour!'}</span> : '';

	return (
		<h1>
			{gig.artist} {onTour}
			<small>{moment(gig.date).format("MMM Do YYYY")}</small>
			<p>[ {gig.venue} ]</p>
		</h1>
	);
}

export default GigHeader;