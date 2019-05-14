import React, {useState} from 'react'
import { Mutation } from "react-apollo";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import {Button} from '@material-ui/core';
import {getGigs, deleteGigMutation} from "api/gigs/gigs"
import {Span} from './GigDeleteStyled';
import Confirm from 'components/utils/alerts/Confirm'

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
					<Button size="small" variant="contained" color="primary" onClick={() => {
						handleDeleteClick(deleteGig)
					}}>
						<Span>Delete</Span>
						<DeleteTwoToneIcon fontSize="small" />
					</Button>
					<Confirm active={active} callbackConfirm={() => handleDeleteGig(deleteGig)} callbackCancel={() => setActive(false)} />
				</>
			)}
		</Mutation>
	);
}

export default GigDelete;