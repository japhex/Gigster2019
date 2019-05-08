import React from 'react'
import GigDelete from "./GigDelete"

const GigFooter = ({gigId, switchEditMode}) => {
	return (
		<div className="gig__card-footer">
			<span className="button button-edit" onClick={switchEditMode}>Edit</span>
			<GigDelete gigId={gigId} />
		</div>
	);
}

export default GigFooter;