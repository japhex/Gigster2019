import React from 'react'
import moment from 'moment';
import {P,Span} from "./GigHeaderStyled"

const GigHeader = ({gig, type}) => {
	return (
		<P>
			<small>{moment(gig.date).format("MMM Do YYYY")}</small>
			<Span>{gig.venue}</Span>
		</P>
	);
}

export default GigHeader;