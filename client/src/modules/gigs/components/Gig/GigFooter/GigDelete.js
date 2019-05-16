import React, {useState} from 'react'
import { Mutation } from "react-apollo";
import {Button, SIZE} from 'baseui/button';
import {getGigs, deleteGigMutation} from "api/gigs/gigs"
import Confirm from 'components/utils/alerts/Confirm'
import Delete from "baseui/icon/delete"

const GigDelete = ({gigId}) => {
	const [active, setActive] = useState(false)

	const handleDeleteClick = () => {
		setActive(true);
	}

	const handleDeleteGig = (deleteGig) => {
		deleteGig({variables: {id: gigId}})
	}

	return (
		<Mutation mutation={deleteGigMutation} update={(cache, { data }) => {
			const newGigs = data.deleteGig;
			cache.writeQuery({query:getGigs, data: {gigs:newGigs}})
		}}>
			{(deleteGig) => (
				<>
					<Button size={SIZE.compact} endEnhancer={() => <Delete size={24} />} onClick={() => {
						handleDeleteClick(deleteGig)
					}}>
						Delete
					</Button>
					<Confirm active={active} callbackConfirm={() => handleDeleteGig(deleteGig)} callbackCancel={() => setActive(false)} />
				</>
			)}
		</Mutation>
	);
}

export default GigDelete;