import { useState } from 'react'

import { useLazyQuery } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Spinner, Switch } from '@chakra-ui/react'
import { Gig, SearchGigDocument, SearchGigQuery } from '../../generated/graphql'
import GigResult from './result'

const Search = () => {
  const { register, handleSubmit } = useForm()
  const [value, setValue] = useState('')
  const [pastGig, setPastGig] = useState<boolean>(false)
  const [searchGigAction, { data, loading }] = useLazyQuery<SearchGigQuery>(SearchGigDocument)

  const onSubmit = async variables => {
    await searchGigAction({
      variables: { ...variables, type: 'Ticketmaser', ...(pastGig && { date: 'past' }) },
    })
  }

  return (
    <>
      {!data ? (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', justifyContent: 'center' }}>
          <Flex direction="column" gap={4} py={4}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="past" mb="0">
                Past gig
              </FormLabel>
              <Switch ref={register('past')} id="past" onChange={e => setPastGig(e.target.checked)} />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Artist name..."
                {...register('artist')}
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="yellow" isLoading={loading} type="submit">
              Search
            </Button>
          </Flex>
        </form>
      ) : loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        data?.searchGig.map((gig: Gig) => <GigResult gig={gig} key={gig.id} />)
      )}
    </>
  )
}

export default Search
