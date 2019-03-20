import React from 'react'

function GigList(props) {
	const {user} = props;

	return (
		<>
			Past gigs: {user.oldGigs.length}<br />
			Upcoming gigs: {user.newGigs.length}
		</>
	);
}

export default GigList;