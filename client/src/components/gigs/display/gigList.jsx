import React from 'react'

import { GigListContainer } from '../styles/listStyled'

import Gig from './gig'

const GigList = ({ type, title, gigs, withoutCrud }) => {
  const gigType = type
  return (
    <GigListContainer>
      {gigs !== null ? (
        gigs.map(gig => (
          <Gig
            key={gig.id}
            gig={gig}
            gigType={gigType}
            withoutCrud={withoutCrud}
          />
        ))
      ) : (
        <>No {title}</>
      )}
    </GigListContainer>
  )
}

export default GigList
