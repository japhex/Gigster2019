import React from 'react'
import CreateUpdateGig from './../model/CreateUpdateGig/CreateUpdateGig';

const UpdateGig = (props) => (
	<CreateUpdateGig gigId={props.match.params.id} />
);

export default UpdateGig;