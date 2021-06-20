import React from 'react'

import StatBox from 'components/users/user/stats/box'
import { StatsHeader } from 'components/users/user/styles/headerStyled'

const GigList = ({ user }) =>
  user.oldGigs !== undefined && (
    <>
      <StatsHeader>
        <StatBox digit={user.oldGigs.length} message="Past gigs" />
        <StatBox digit={user.newGigs.length} message="Upcoming gigs" />
      </StatsHeader>
    </>
  )

export default GigList
