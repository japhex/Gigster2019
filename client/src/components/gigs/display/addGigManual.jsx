import React from 'react'

import { Formik, Field, Form } from 'formik'
import { Mutation } from 'react-apollo'

import { createGigMutation, getGigs } from 'api/gigs/gigs'
import { Div } from 'components/gigs/styles/addGigManualStyled'
import { Input } from 'components/ui/forms/input'
import { Button } from 'components/utils/styles/formsStyled'
import { Buttons } from 'components/utils/styles/modalStyled'

const AddGigManual = ({ callback }) => (
  <Mutation
    mutation={createGigMutation}
    update={(cache, { data }) => {
      const newGigs = data.createGig
      cache.writeQuery({ query: getGigs, data: { gigs: newGigs } })
      callback()
    }}
  >
    {createGig => (
      <Formik
        onSubmit={async values => {
          await createGig({ variables: values })
        }}
        render={({ isSubmitting }) => (
          <Form>
            <Div>
              <Field
                type="text"
                name="artist"
                render={({ field }) => (
                  <Input type="text" name="artist" {...field} />
                )}
              />
              <Field
                type="date"
                name="date"
                render={({ field }) => (
                  <Input type="date" name="date" {...field} />
                )}
              />
              <Field
                type="text"
                name="venue"
                render={({ field }) => (
                  <Input type="text" name="venue" {...field} />
                )}
              />
            </Div>
            <Buttons>
              <Button isLoading={isSubmitting}>Create gig</Button>
              <Button onClick={callback} type="secondary">
                Cancel
              </Button>
            </Buttons>
          </Form>
        )}
      />
    )}
  </Mutation>
)

export default AddGigManual
