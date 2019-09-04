import React, {useState} from 'react'
import {useMutation} from "@apollo/react-hooks"
import {getGigs, deleteGigMutation} from "api/gigs/gigs"
import {DeleteGigContainer} from '../../GigStyled/GigDeleteStyled'
import Confirm from 'components/utils/alerts/Confirm'
import Delete from "baseui/icon/delete"

const GigDelete = ({gigId}) => {
	const [active, setActive] = useState(false)
	const [deleteGigTrigger] = useMutation(deleteGigMutation, {
		update(cache, { data: { deleteGig } }) {
			cache.writeQuery({query:getGigs, data: {gigs:deleteGig}})
		}
	});

	const handleDeleteClick = () => {
		setActive(true);
	}

	const handleDeleteGig = () => {
		deleteGigTrigger({variables: {id: gigId}})
	}

	return (
		<DeleteGigContainer>
			<div>
				<Delete size={24} onClick={() => {
					handleDeleteClick()
				}} overrides={{
					$size: 30
				}}
				/>
			</div>
			<Confirm active={active} callbackConfirm={() => handleDeleteGig()} callbackCancel={() => setActive(false)} />
		</DeleteGigContainer>
	);
}

export default GigDelete;