import React from 'react'
import GigDelete from "./GigDelete"
import {Button} from '@material-ui/core';
import {Div} from './GigFooterStyled';

const GigFooter = ({gigId, switchEditMode}) => {
	return (
		<Div className="gig__card-footer">
			<Button size="small" variant="contained" color="primary" onClick={switchEditMode}>
				Edit
			</Button>
			<GigDelete gigId={gigId} />
		</Div>
	);
}

export default GigFooter;