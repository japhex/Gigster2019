import React, {useState} from 'react'
import './Gig.scss';
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"
import {Card, StyledBody} from 'baseui/card';

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<Card title={`${gig.artist}`}>
			<StyledBody>
				<UpdateGig initialValues={gig} switchEditMode={switchEditMode} editMode={editMode} />
				<DisplayGig gig={gig} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} />
			</StyledBody>
		</Card>
	)
}

export default Gig;