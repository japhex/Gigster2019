import React from 'react'

import { useLazyQuery } from '@apollo/client'

import { getGigs, getGigsUnfiltered } from '../../../api/gigs/gigs'
import { client } from '../../../App'

import { FilterButton } from './styled/filter-button'

const FestivalFilterUnfiltered = ({ handleFilterClick }) => {
  const [getFilteredGigs] = useLazyQuery(getGigsUnfiltered, {
    client,
    onCompleted: data => {
      client.writeQuery({
        query: getGigs,
        data: { gigs: data.gigsUnfiltered },
      })
      handleFilterClick()
    },
    fetchPolicy: 'network-only',
  })

  // if (loading || error) <QueryHandler loading={loading} error={error} />

  return (
    <>
      <FilterButton onClick={() => getFilteredGigs()}>All gigs</FilterButton>
    </>
  )
}

export default FestivalFilterUnfiltered
