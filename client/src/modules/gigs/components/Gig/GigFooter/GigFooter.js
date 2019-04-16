import React from 'react'
import {Link} from 'react-router-dom'

const GigFooter = ({gigId, deleteGig}) => {
	const handleDeleteClick = async () => {
		await deleteGig(gigId);
	}

	return (
		<div className="gig__card-footer">
			<Link className="button button-edit" to={`/gigs/update/${gigId}`}>Edit</Link>
			<button className="button button-delete" onClick={handleDeleteClick}>Delete</button>
		</div>
	);
}

export default GigFooter;