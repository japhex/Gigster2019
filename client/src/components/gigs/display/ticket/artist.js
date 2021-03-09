import React from 'react'
import { ArtistName } from '../../styles/gigStyled'
import Rating from '../rating'

export const Artist = ({ id, artist, gigType, festival, activeRating }) => (
  <>
    <ArtistName festival={festival}>{artist}</ArtistName>
    {gigType === 'old' && <Rating gigId={id} activeRating={activeRating} />}
  </>
)
