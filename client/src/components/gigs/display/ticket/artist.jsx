import Rating from 'components/gigs/display/rating'
import { ArtistName } from 'components/gigs/styles/gigStyled'

export const Artist = ({ id, artist, gigType, festival, activeRating }) => (
  <>
    <ArtistName festival={festival}>{artist}</ArtistName>
    {gigType === 'old' && <Rating gigId={id} activeRating={activeRating} />}
  </>
)
