import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'baseui/modal';
import {Button, KIND, SIZE} from 'baseui/button';
import {createGigMutation, getGigs} from "../../../api/gigs/gigs"
import {Input} from "baseui/input"
import {Div} from "./CreateGigStyled"
import {Buttons} from "../../../components/utils/styled/ModalStyled"

const CreateGig = ({addMode, callback}) => (
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
			        <Modal isOpen={addMode}>
				        <Form>
					        <ModalHeader>Create gig</ModalHeader>
					        <ModalBody>
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
					        </ModalBody>
					        <ModalFooter>
						        <Buttons>
							        <Button size={SIZE.compact} isLoading={isSubmitting}>
								        Create gig
							        </Button>
							        <Button kind={KIND.secondary} size={SIZE.compact} onClick={callback}>
								        Cancel
							        </Button>
						        </Buttons>
					        </ModalFooter>
				        </Form>
			        </Modal>
		        )}
			/>
		)}
	</Mutation>
)

export default CreateGig;