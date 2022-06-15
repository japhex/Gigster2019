import Rating from 'components/gigs/display/rating'
import { ArtistName } from 'components/gigs/styles/gig.styled'

// move to gig type
interface Props {
  id: string
  artist: string
  gigType: string
  activeRating: number
}

export const Artist = ({ id, artist, gigType, activeRating }: Props) => (
  <>
    <ArtistName>{artist}</ArtistName>
    {gigType === 'old' && <Rating gigId={id} activeRating={activeRating} />}
  </>
)
