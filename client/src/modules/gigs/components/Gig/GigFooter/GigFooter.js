import React from 'react'
import {Link} from 'react-router-dom'
import GigDelete from "./GigDelete"

const GigFooter = ({gigId}) => {
	return (
		<div className="gig__card-footer">
			<Link className="button button-edit" to={`/gigs/update/${gigId}`}>Edit</Link>
			<GigDelete gigId={gigId} />
		</div>
	);
}

export default GigFooter;