import React from 'react'

import { StatsHeader } from '../styles/headerStyled'

import StatBox from './box'

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
