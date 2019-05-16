import React from 'react'
import moment from 'moment';
import {P,Span} from "./GigHeaderStyled"

const GigHeader = ({gig, type}) => {
	const onTour = (gig.artistInfo !== undefined && gig.artistInfo.artist !== undefined) && type !== 'new' ? <span className="gig__on-tour">{gig.artistInfo.artist.ontour && 'On tour!'}</span> : '';

	return (
		<P>
			{onTour}
			<small>{moment(gig.date).format("MMM Do YYYY")}</small>
			<Span>{gig.venue}</Span>
		</P>
	);
}

export default GigHeader;