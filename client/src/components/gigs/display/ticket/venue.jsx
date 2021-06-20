import React from 'react'

import { VenueStyled } from 'components/gigs/styles/gigStyled'

export const Venue = ({ venue, location }) => (
  <VenueStyled>
    {venue}
    <br />
    {location}
  </VenueStyled>
)
