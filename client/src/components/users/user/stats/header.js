import React from 'react'
import StatBox from './box'
import { StatsHeader } from '../styles/headerStyled'

const GigList = ({ user }) =>
  user.oldGigs !== undefined && (
    <>
      <StatsHeader>
        <StatBox digit={user.oldGigs.length} message={'Past gigs'} />
        <StatBox digit={user.newGigs.length} message={'Upcoming gigs'} />
      </StatsHeader>
    </>
  )

export default GigList
