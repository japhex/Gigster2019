import React from 'react'
import {Link} from 'react-router-dom'

function GigFooter({gigId}) {
	return (
		<div className="gig__card-footer">
			<Link className="button button-edit" to={`/gigs/update/${gigId}`}>Edit</Link>
			<Link className="button button-delete" to="">Delete</Link>
		</div>
	);
}

export default GigFooter;