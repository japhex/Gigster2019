import { useLazyQuery } from '@apollo/client'
import { getGigs, getGigsUnfiltered } from 'api/gigs/gigs'
import { client } from 'utils/apollo'

import { FilterButton } from './styled/filter-button'

interface Props {
  handleFilterClick: any
}

const FestivalFilterUnfiltered = ({ handleFilterClick }: Props) => {
  const [getFilteredGigs] = useLazyQuery(getGigsUnfiltered, {
    // @ts-ignore
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

  return <FilterButton onClick={() => getFilteredGigs()}>All gigs</FilterButton>
}

export default FestivalFilterUnfiltered
