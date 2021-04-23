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
  // CHANGE TO LAZY QUERY
  const [searchGigAction, { loading }] = useMutation(searchGigMutation, {
    update(cache, { data: { searchGig } }) {
      setGigs(searchGig)
    },
  })

  return (
    <Formik
      onSubmit={async values => {
        await searchGigAction({ variables: values })
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
                    <Button isLoading={loading}>
                      <SearchIcon />
                    </Button>
                  </>
                )}
              />
            </Div>
          </Form>

          {loading ? 'loading' : <SearchResults gigs={gigs} />}
        </>
      )}
    />
  )
}

export default Search
