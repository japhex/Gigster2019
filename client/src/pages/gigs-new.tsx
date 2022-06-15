import { useQuery } from '@apollo/react-hooks'
import { getGigs } from 'api/gigs/gigs'
import GigList from 'components/gigs/display/gig-list'
import QueryHandler from 'components/utils/queryHandler'

const UserGigs = () => {
  const { loading, error, data } = useQuery(getGigs)
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  const gigs = data.gigs
  const { newGigs } = gigs

  return <GigList type="new" title="Upcoming gigs" gigs={newGigs} />
}

export default UserGigs
