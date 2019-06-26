import React, {useState} from 'react'
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"
import DisplaySongkickGig from './DisplaySongkickGig'
import GigRating from "./GigRating"
import {Card, StyledBody} from 'baseui/card';
import {GigContainer} from './GigStyled'

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);
	const songkickGig = gig.songkickJson !== null ? JSON.parse(gig.songkickJson) : null

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		songkickGig !== null ?
			<GigContainer>
				<Card title={songkickGig.performance.map(band => band.billingIndex === 1 && band.displayName)}>
					<StyledBody>
						{type === 'old' &&
							<GigRating />
						}
						<DisplaySongkickGig gig={gig} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} />
					</StyledBody>
				</Card>
			</GigContainer>
		:
			<GigContainer>
				<Card title={`${gig.artist}`}>
					<StyledBody>
						{type === 'old' &&
						<GigRating/>
						}
						<UpdateGig initialValues={gig} switchEditMode={switchEditMode} editMode={editMode} />
						<DisplayGig gig={gig} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} />
					</StyledBody>
				</Card>
			</GigContainer>
	)
}

export default Gig;