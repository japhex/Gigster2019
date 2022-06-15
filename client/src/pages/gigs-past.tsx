import { useQuery } from '@apollo/react-hooks'
import { getGigs } from 'api/gigs/gigs'
import GigList from 'components/gigs/display/gig-list'
import QueryHandler from 'components/utils/queryHandler'

const UserGigs = () => {
  const { loading, error, data } = useQuery(getGigs)
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  const gigs = data.gigs
  const { oldGigs } = gigs

  return <GigList type="old" title="Past gigs" gigs={oldGigs} />
}

export default UserGigs
