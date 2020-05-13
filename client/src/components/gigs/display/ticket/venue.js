import React from 'react'
import { Time, VenueStyled } from '../../styles/gigStyled'

export const Venue = ({ venue, location, time }) => (
  <VenueStyled>
    <strong>{venue}</strong>
    <i>{location}</i>
    <Time>{time !== '0' && <>{time.substring(0, 5)} PM</>}</Time>
  </VenueStyled>
)
