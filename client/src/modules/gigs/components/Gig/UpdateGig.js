import React from 'react'
import { Mutation } from "react-apollo";
import { Formik, Field, Form } from 'formik';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'baseui/modal';
import {Button, KIND, SIZE} from 'baseui/button';
import {Input} from 'baseui/input';
import {updateGigMutation, getGigs} from "../../../../api/gigs/gigs"
import {Div} from './UpdateGigStyled';
import {Buttons} from "components/utils/styled/ModalStyled"

const UpdateGig = ({editMode, initialValues, switchEditMode}) => {
	console.log(initialValues.artist)
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
				        render={({ errors, status, touched, isSubmitting, submitForm }) => (
					        <Modal isOpen={editMode}>
						        <ModalHeader>Update gig</ModalHeader>
						        <ModalBody>
							        <p>Update gig details below:</p>
							        <Form>
								        <Div>
									        <Field type="hidden" name="id" render={({field}) => (
										        <Input type="hidden" {...field} />
									        )} />
									        <Field type="text" name="artist" render={({field}) => (
										        <Input type="text" name="artist" {...field} />
									        )} />
									        <Field type="date" name="date" render={({field}) => (
										        <Input type="date" name="venue" {...field} />
									        )} />
									        <Field type="text" name="venue" render={({field}) => (
										        <Input type="text" name="venue" {...field} />
									        )} />
								        </Div>
							        </Form>
						        </ModalBody>
						        <ModalFooter>
							        <Buttons>
								        <Button size={SIZE.compact} isLoading={isSubmitting} onClick={() => submitForm()}>
									        Update gig
								        </Button>
								        <Button kind={KIND.secondary} size={SIZE.compact} onClick={() => switchEditMode()}>
									        Cancel
								        </Button>
							        </Buttons>
						        </ModalFooter>
					        </Modal>
				        )}
				/>
			)}
		</Mutation>
	);
}

export default UpdateGig;