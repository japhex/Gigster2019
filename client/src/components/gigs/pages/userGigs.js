import React from 'react'
import { useQuery } from 'react-apollo'
import { getGigsByUser } from 'api/users/users'
import GigList from '../display/gigList'
import QueryHandler from 'components/utils/queryHandler'
import { Div } from '../styles/gigsStyled'

const UserGigs = ({ user }) => {
  const { loading, error, data } = useQuery(getGigsByUser, {
    variables: { userId: user.id },
  })
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  const { newGigs, oldGigs } = data.userGigs.gigs

  return (
    <Div>
      <GigList type="new" title="Upcoming gigs" gigs={newGigs} />
      <GigList type="old" title="Past gigs" gigs={oldGigs} />
    </Div>
  )
}

export default UserGigs
