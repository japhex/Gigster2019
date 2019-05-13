import React from 'react'
import { Mutation } from "react-apollo";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import {Button} from '@material-ui/core';
import {getGigs, deleteGigMutation} from "api/gigs/gigs"
import {Span} from './GigDeleteStyled';

const GigDelete = ({gigId}) => {
	return (
		<Mutation mutation={deleteGigMutation} update={(cache, { data }) => {
			const newGigs = data.deleteGig;
			cache.writeQuery({query:getGigs, data: {gigs:newGigs}})
		}}>
			{(deleteGig) => (
				<Button size="small" variant="contained" color="primary" onClick={
					e => {
						e.preventDefault();
						deleteGig({variables: {id: gigId}})
					}
				}>
					<Span>Delete</Span>
					<DeleteTwoToneIcon fontSize="small" />
				</Button>
			)}
		</Mutation>
	);
}

export default GigDelete;