import { Detail } from 'components/gigs/display/styled/detail'
import { Ticket, Header, Festival } from 'components/gigs/display/styled/ticket'
import { Artist } from 'components/gigs/display/ticket/artist'
import { Date } from 'components/gigs/display/ticket/date'
import { Support } from 'components/gigs/display/ticket/support'
import { Time } from 'components/gigs/display/ticket/time'
import { Venue } from 'components/gigs/display/ticket/venue'
import { formatGig } from 'middleware/utils'

interface Props {
  gig: any
  gigType: string
}

const Gig = ({ gig, gigType }: Props) => {
  const { id, artist, supports, festival, location, date, venue, time, rating, type } = formatGig(
    gig.id,
    gig.songKickGig
  )

  return (
    <Ticket>
      <Header>
        <Date gigDate={date} />
        <br />
        <Time time={time} />
        {festival && <Festival>[FESTIVAL]</Festival>}
      </Header>
      <Detail>
        <Artist id={id} activeRating={rating} artist={artist} gigType={gigType} />
        <Support supports={supports} type={type} />
      </Detail>
      <Venue location={location} venue={venue} />
      {/* <Delete id={id} /> */}
    </Ticket>
  )
}

export default Gig
