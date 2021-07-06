import { useLazyQuery } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'

import { searchGigQuery } from 'api/gigs/gigs'
import SearchResults from 'components/gigs/searchResult/searchResults'
import { Div } from 'components/gigs/styles/addGigManualStyled'
import { Button } from 'components/ui/forms/button'
import { Input } from 'components/ui/forms/input'
import { SearchIcon } from 'components/ui/icons/search'
import { Loader } from 'components/utils/styles/loaderStyled'

const Search = () => {
  const { register, handleSubmit } = useForm()
  const [searchGigAction, { data, loading }] = useLazyQuery(searchGigQuery)

  const onSubmit = async variables => {
    await searchGigAction({ variables })
  }

  if (loading) return <Loader />

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

      <SearchResults gigs={data?.searchGig} />
    </>
  )
}

export default Search
