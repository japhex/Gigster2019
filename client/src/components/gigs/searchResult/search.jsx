import { useState } from 'react';

import { useMutation } from '@apollo/react-hooks'
import { Field, Form, Formik } from 'formik'

import { searchGigMutation } from 'api/gigs/gigs'
import SearchResults from 'components/gigs/searchResult/searchResults'
import { Div } from 'components/gigs/styles/addGigManualStyled'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import { SearchIcon } from 'components/ui/icons/search'

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
