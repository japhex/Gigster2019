import React from 'react'
import CreateUpdateGig from './../model/CreateUpdateGig/CreateUpdateGig';

function UpdateGig(props) {
	return (
		<CreateUpdateGig gigId={props.match.params.id} />
	);
}

export default UpdateGig;