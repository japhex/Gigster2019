import React, {useState} from 'react'
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"
import GigRating from "./GigRating"
import {Card, StyledBody} from 'baseui/card';
import {GigContainer} from './GigStyled'

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<GigContainer>
			<Card title={`${gig.artist}`}>
				<StyledBody>
					{type === 'old' &&
						<GigRating />
					}
					<UpdateGig initialValues={gig} switchEditMode={switchEditMode} editMode={editMode} />
					<DisplayGig gig={gig} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} />
				</StyledBody>
			</Card>
		</GigContainer>
	)
}

export default Gig;