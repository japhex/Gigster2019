import React from 'react'
import { Mutation } from "react-apollo";
import {getGigs, deleteGigMutation} from "api/gigs/gigs"

const GigDelete = ({gigId}) => {
	return (
		<Mutation mutation={deleteGigMutation} update={(cache, { data }) => {
			const newGigs = data.deleteGig;
			cache.writeQuery({query:getGigs, data: {gigs:newGigs}})
		}}>
			{(deleteGig) => (
				<button className="button button-delete" onClick={
					e => {
						e.preventDefault();
						deleteGig({variables: {id: gigId}})
					}
				}>Delete</button>
			)}
		</Mutation>
	);
}

export default GigDelete;