import React from 'react'

function GigFooter(props) {
	const {gigId} = props;

	return (
		<div className="gig__card-footer">
			<a className="button button-edit" href={`/gigs/update/${gigId}`}>Edit</a>
			<a className="button button-delete" href="">Delete</a>
		</div>
	);
}

export default GigFooter;