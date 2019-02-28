import React from 'react'
import moment from 'moment';

function GigHeader(props) {
	const {gig, type} = props;
	const onTour = gig.artistInfo !== undefined && type !== 'new' ? <span className="gig__on-tour">{gig.artistInfo.artist.ontour && 'On tour!'}</span> : '';

	return (
		<h1>
			{gig.band} {onTour}
			<small>{moment(gig.date).format("MMM Do YYYY")}</small>
			<p>[ {gig.venue} ]</p>
		</h1>
	);
}

export default GigHeader;