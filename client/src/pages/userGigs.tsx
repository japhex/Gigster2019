import { Flex } from '@chakra-ui/react'
import { getGigsByUser } from 'api/users/users'
import GigList from 'components/gigs/display/gig-list'
import QueryHandler from 'components/utils/queryHandler'
import { useQuery } from 'react-apollo'

interface Props {
  user: any
}

const UserGigs = ({ user }: Props) => {
  const { loading, error, data } = useQuery(getGigsByUser, {
    variables: { userId: user.id },
  })
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  const { newGigs, oldGigs } = data.userGigs.gigs

  return (
    <Flex>
      <GigList type="new" title="Upcoming gigs" gigs={newGigs} />
      <GigList type="old" title="Past gigs" gigs={oldGigs} />
    </Flex>
  )
}

export default UserGigs
