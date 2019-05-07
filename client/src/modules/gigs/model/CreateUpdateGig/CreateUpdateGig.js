import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {Button} from '@material-ui/core';
import './CreateUpdateGig.scss';
import {createGigMutation, getGigs} from "../../../../api/gigs/gigs"

const CreateUpdateGig = () => {
	return (
		<Mutation mutation={createGigMutation} update={(cache, { data }) => {
			const newGigs = data.createGig;
			cache.writeQuery({query:getGigs, data: {gigs:newGigs}})
		}}>
			{(createGig) => (
				<Formik onSubmit={async (values) => {
					await createGig({variables: values})
				}}
				render={({ errors, status, touched, isSubmitting }) => (
					<Form>
						<Field type="text" name="artist" />
						<Field type="date" name="date" />
						<Field type="text" name="venue" />

						<Button variant="contained" color="primary" disabled={isSubmitting} type="submit">
							Create gig
						</Button>
					</Form>
				)}
				/>
			)}
		</Mutation>
	);
}

export default CreateUpdateGig;