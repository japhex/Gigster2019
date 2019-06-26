import React, {useState} from 'react'
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"
import DisplaySongkickGig from './DisplaySongkickGig'
import GigRating from "./GigRating"
import {Card, StyledBody} from 'baseui/card';
import {GigContainer} from './GigStyled'
import {formatGig} from './../../../middleware/utils'

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);
	const songkickGig = gig.songkickJson !== null ? JSON.parse(gig.songkickJson) : null
	const gigFormatted = songkickGig ? formatGig(gig.id, JSON.parse(gig.songkickJson)) : gig

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<GigContainer>
			<Card title={gigFormatted.artist}>
				<StyledBody>
					{type === 'old' &&
						<GigRating/>
					}
					{!songkickGig &&
						<UpdateGig initialValues={gigFormatted} switchEditMode={switchEditMode} editMode={editMode}/>
					}
					<DisplayGig gig={gigFormatted} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} />
				</StyledBody>
			</Card>
		</GigContainer>
	)
}

export default Gig;