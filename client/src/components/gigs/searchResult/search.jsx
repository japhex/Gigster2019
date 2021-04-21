import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { Field, Form, Formik } from 'formik'

import { searchGigMutation } from '../../../api/gigs/gigs'
import { Button } from '../../ui/forms/button'
import { Input } from '../../ui/forms/input'
import { SearchIcon } from '../../ui/icons/search'
import { Div } from '../styles/addGigManualStyled'

import SearchResults from './searchResults'

const Search = () => {
  const [gigs, setGigs] = useState([])
  const [submittingForm, setSubmittingForm] = useState(false)
  const [searchGigAction] = useMutation(searchGigMutation, {
    update(cache, { data: { searchGig } }) {
      setGigs(searchGig)
    },
  })

  return (
    <Formik
      onSubmit={async values => {
        setSubmittingForm(true)
        await searchGigAction({ variables: values })
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
                    <Button isLoading={submittingForm}>
                      <SearchIcon />
                    </Button>
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
