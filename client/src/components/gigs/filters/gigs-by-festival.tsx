import { useLazyQuery } from '@apollo/client'
import { getGigs, getGigsFilteredByFestival } from 'api/gigs/gigs'
import { client } from 'utils/apollo'

import { FilterButton } from './styled/filter-button'

interface Props {
  handleFilterClick: any
}

const FestivalFilter = ({ handleFilterClick }: Props) => {
  const [getFilteredGigs] = useLazyQuery(getGigsFilteredByFestival, {
    // @ts-ignore
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
