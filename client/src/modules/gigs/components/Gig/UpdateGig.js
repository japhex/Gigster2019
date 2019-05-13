import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {Button} from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import {updateGigMutation, getGigs} from "../../../../api/gigs/gigs"
import {Div} from './UpdateGigStyled';

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
						        <Div>
							        <Field type="hidden" name="id" component={TextField}  />
							        <Field type="text" name="artist" component={TextField} />
							        <Field type="date" name="date" component={TextField} />
							        <Field type="text" name="venue" component={TextField} />

							        <Button variant="contained" color="primary" disabled={isSubmitting} type="submit">
								        Update gig
							        </Button>
						        </Div>
					        </Form>
				        )}
				/>
			)}
		</Mutation>
	);
}

export default UpdateGig;