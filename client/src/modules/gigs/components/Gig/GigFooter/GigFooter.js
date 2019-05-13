import React from 'react'
import GigDelete from "./GigDelete"
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import {Button} from '@material-ui/core';
import {Div, Span} from './GigFooterStyled';

const GigFooter = ({gigId, switchEditMode}) => {
	return (
		<Div className="gig__card-footer">
			<Button size="small" variant="contained" color="primary" onClick={switchEditMode}>
				<Span>Edit</Span>
				<EditTwoToneIcon fontSize="small" />
			</Button>
			<GigDelete gigId={gigId} />
		</Div>
	);
}

export default GigFooter;