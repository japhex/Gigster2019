import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getGigs } from 'api/gigs/gigs'
import GigList from '../display/gigList'
import QueryHandler from 'components/utils/queryHandler'
import { UserGigsContainer } from '../styles/userGigsStyled'

const UserGigs = () => {
  const { loading, error, data } = useQuery(getGigs)
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  const gigs = data.gigs
  const { newGigs } = gigs

  return (
    <UserGigsContainer>
      <GigList type="new" title="Upcoming gigs" gigs={newGigs} />
    </UserGigsContainer>
  )
}

export default UserGigs
