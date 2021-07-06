import { useLazyQuery } from '@apollo/client'

import { FilterButton } from './styled/filter-button'

import { getGigs, getGigsFilteredByFestival } from 'api/gigs/gigs'
import { client } from 'utils/apollo'

const FestivalFilter = ({ handleFilterClick }) => {
  const [getFilteredGigs] = useLazyQuery(getGigsFilteredByFestival, {
    client,
    onCompleted: data => {
      client.writeQuery({
        query: getGigs,
        data: { gigs: data.gigsFestivalFilter },
      })
      handleFilterClick()
    },
    fetchPolicy: 'network-only',
  })

  // if (loading || error) <QueryHandler loading={loading} error={error} />

  return <FilterButton onClick={() => getFilteredGigs()}>Festival</FilterButton>
}

export default FestivalFilter
