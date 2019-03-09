import React from 'react'

function GigFooter(props) {
	const {gigId} = props;

	return (
		<div className="gig__card-footer">
			<a href={`/gigs/update/${gigId}`}>Edit</a> | <a href="">Delete</a>
		</div>
	);
}

export default GigFooter;