import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {Button} from '@material-ui/core';
import {updateGigMutation, getGigs} from "../../../../api/gigs/gigs"

const UpdateGig = ({initialValues, switchEditMode}) => {
	return (
		<Mutation mutation={updateGigMutation} update={(cache, { data }) => {
			const newGigs = data.updateGig;
			cache.writeQuery({query:getGigs, data: {gigs:newGigs}})
			switchEditMode()
		}}>
			{(createGig) => (
				<Formik enableReinitialize={true} initialValues={initialValues} onSubmit={async (values) => {
					await createGig({variables: values})
				}}
				        render={({ errors, status, touched, isSubmitting }) => (
					        <Form>
						        <Field type="hidden" name="id" />
						        <Field type="text" name="artist" />
						        <Field type="date" name="date" />
						        <Field type="text" name="venue" />

						        <Button variant="contained" color="primary" disabled={isSubmitting} type="submit">
							        Update gig
						        </Button>
					        </Form>
				        )}
				/>
			)}
		</Mutation>
	);
}

export default UpdateGig;