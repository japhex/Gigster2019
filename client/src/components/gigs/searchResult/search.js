import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Field, Form, Formik } from 'formik'
import { Input, Button } from 'japhex-ui'
import { Div } from '../styles/addGigManualStyled'
import SearchResults from './searchResults'
import { searchGigMutation } from 'api/gigs/gigs'

const Search = ({ callback }) => {
  const [gigs, setGigs] = useState([])
  const [submittingForm, setSubmittingForm] = useState(false)
  const [searchGig] = useMutation(searchGigMutation, {
    update(cache, { data: { searchGig } }) {
      setGigs(searchGig)
    },
  })

  return (
    <Formik
      onSubmit={async (values) => {
        setSubmittingForm(true)
        await searchGig({ variables: values })
        setSubmittingForm(false)
      }}
      render={() => (
        <>
          <Form>
            <Div>
              <Field
                type="text"
                name="artist"
                render={({ field }) => (
                  <>
                    <Input type="text" name="artist" {...field} />
                    <Button isLoading={submittingForm}>Search</Button>
                  </>
                )}
              />
            </Div>
          </Form>

          <SearchResults gigs={gigs} />
        </>
      )}
    />
  )
}

export default Search
