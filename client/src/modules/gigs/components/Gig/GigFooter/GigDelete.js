import React, {useState} from 'react'
import {useMutation} from "@apollo/react-hooks"
import {Button, KIND, SIZE} from 'baseui/button'
import {getGigs, deleteGigMutation} from "api/gigs/gigs"
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
		<>
			<Button kind={KIND.secondary} size={SIZE.compact} endEnhancer={() => <Delete size={24} />} onClick={() => {
				handleDeleteClick()
			}}
	        overrides={{
		        BaseButton: {
		            style: {backgroundColor:'#991100'}
		        }
	        }}>
				Delete
			</Button>
			<Confirm active={active} callbackConfirm={() => handleDeleteGig()} callbackCancel={() => setActive(false)} />
		</>
	);
}

export default GigDelete;