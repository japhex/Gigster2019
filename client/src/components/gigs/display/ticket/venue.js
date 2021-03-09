import React from 'react'
import { VenueStyled } from '../../styles/gigStyled'

export const Venue = ({ venue, location }) => (
  <VenueStyled>
    {venue}
    <br />
    {location}
  </VenueStyled>
)
