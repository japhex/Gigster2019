import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {Button} from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import {createGigMutation, getGigs} from "../../../api/gigs/gigs"

const CreateGig = () => {
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
						        <Field type="text" name="artist" component={TextField} />
						        <Field type="date" name="date" component={TextField} />
						        <Field type="text" name="venue" component={TextField} />

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

export default CreateGig;