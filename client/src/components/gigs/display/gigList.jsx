import React from 'react'

import Gig from './gig'

const GigList = ({ type, title, gigs, withoutCrud }) => {
  const gigType = type
  return (
    <>
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
    </>
  )
}

export default GigList
