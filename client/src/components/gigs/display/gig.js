import React from 'react'
import { formatGig } from '../../../middleware/utils'
import { Date } from './ticket/date'
import { Time } from './ticket/time'
import { Venue } from './ticket/venue'
import { Support } from './ticket/support'
import { Artist } from './ticket/artist'
import Delete from './delete'
import { Ticket, Header, Festival } from './styled/ticket'
import { Detail } from './styled/detail'
import { FestivalIcon } from '../../ui/icons/festival'

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
        {festival && (
          <Festival>
            <FestivalIcon />
          </Festival>
        )}
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
      {/*<Delete gigId={id} />*/}
    </Ticket>
  )
}

export default Gig
