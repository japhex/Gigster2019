import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {createGigMutation, getGigs} from "api/gigs/gigs"
import {Div} from "../GigStyled/AddManualGigStyled"
import {Input} from "components/utils/styled/Forms"
import {Buttons} from "components/utils/styled/ModalStyled"
import {Button} from 'components/utils/styled/Forms'

const AddManualGig = ({callback}) => (
	<Mutation mutation={createGigMutation} update={(cache, { data }) => {
	    const newGigs = data.createGig;
	    cache.writeQuery({query:getGigs, data: {gigs:newGigs}})
	    callback()
	}}>
	    {(createGig) => (
	        <Formik onSubmit={async (values) => {
		        await createGig({variables: values})
	        }}
		        render={({ errors, status, touched, isSubmitting }) => (
			        <Form>
						<Div>
						    <Field type="text" name="artist" render={({field}) => (
						        <Input type="text" name="artist" {...field} />
						    )} />
						    <Field type="date" name="date" render={({field}) => (
						        <Input type="date" name="date" {...field} />
						    )} />
						    <Field type="text" name="venue" render={({field}) => (
						        <Input type="text" name="venue" {...field} />
						    )} />
						</Div>
				        <Buttons>
					        <Button isLoading={isSubmitting}>
					            Create gig
					        </Button>
					        <Button onClick={callback} secondary>
					            Cancel
					        </Button>
				        </Buttons>
			        </Form>
		        )}
	        />
	    )}
	</Mutation>
)

export default AddManualGig;