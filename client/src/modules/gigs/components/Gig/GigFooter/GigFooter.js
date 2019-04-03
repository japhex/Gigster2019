import React from 'react'
import {Link} from 'react-router-dom'
import withGigs from 'modules/middleware/withGigs';

const GigFooter = ({gigId, fetchGigs, fetchGigsAdditionalDetail, deleteGig}) => {
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

export default withGigs(GigFooter);