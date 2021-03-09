import React from 'react'
import Gig from './gig'
import { GigListContainer } from '../styles/listStyled'

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
