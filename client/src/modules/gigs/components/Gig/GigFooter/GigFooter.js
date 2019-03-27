import React from 'react'
import {deleteGig} from './../../../actions/gigs';
import {Link} from 'react-router-dom'
import {connect} from "react-redux"

function GigFooter({gigId, deleteGig}) {
	const handleDeleteClick = () => {
		console.log(gigId);
		deleteGig(gigId);
	}

	return (
		<div className="gig__card-footer">
			<Link className="button button-edit" to={`/gigs/update/${gigId}`}>Edit</Link>
			<button className="button button-delete" onClick={handleDeleteClick}>Delete</button>
		</div>
	);
}

export default connect(null, { deleteGig })(GigFooter);