import { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'

import { searchGigMutation } from 'api/gigs/gigs'
import SearchResults from 'components/gigs/searchResult/searchResults'
import { Div } from 'components/gigs/styles/addGigManualStyled'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import { SearchIcon } from 'components/ui/icons/search'

const Search = () => {
  const { register, handleSubmit } = useForm()
  const [gigs, setGigs] = useState([])
  // CHANGE TO LAZY QUERY
  const [searchGigAction, { loading }] = useMutation(searchGigMutation, {
    update(cache, { data: { searchGig } }) {
      setGigs(searchGig)
    },
  })

  const onSubmit = async variables => {
    await searchGigAction({ variables })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <Input {...register('artist')} />
          <Button isLoading={loading}>
            <SearchIcon />
          </Button>
        </Div>
      </form>

      {loading ? 'loading' : <SearchResults gigs={gigs} />}
    </>
  )
}

export default Search
