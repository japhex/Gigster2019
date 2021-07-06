import { Detail } from 'components/gigs/display/styled/detail'
import { Ticket, Header, Festival } from 'components/gigs/display/styled/ticket'
import { Artist } from 'components/gigs/display/ticket/artist'
import { Date } from 'components/gigs/display/ticket/date'
import { Support } from 'components/gigs/display/ticket/support'
import { Time } from 'components/gigs/display/ticket/time'
import { Venue } from 'components/gigs/display/ticket/venue'
import { formatGig } from 'middleware/utils'

const Gig = ({ gig, gigType }) => {
  const gigFormatted = formatGig(gig.id, gig.songKickGig)
  const {
    id,
    artist,
    supports,
    festival,
    location,
    date,
    venue,
    time,
    rating,
    type,
  } = gigFormatted

  return (
    <Ticket>
      <Header>
        <Date gigDate={date} />
        <br />
        <Time time={time} />
        {festival && <Festival>[FESTIVAL]</Festival>}
      </Header>
      <Detail>
        <Artist
          id={id}
          activeRating={rating}
          artist={artist}
          gigType={gigType}
          festival={festival}
        />
        <Support supports={supports} type={type} />
      </Detail>
      <Venue location={location} venue={venue} />
      {/* <Delete gigId={id} /> */}
    </Ticket>
  )
}

export default Gig
