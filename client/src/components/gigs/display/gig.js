import React from 'react'
import { Card, CardContent, CardFooter } from 'japhex-ui'
import { Ticket, TicketLeft, Details } from '../styles/gigStyled'
import { formatGig } from '../../../middleware/utils'
import { Date } from './ticket/date'
import { Venue } from './ticket/venue'
import { Support } from './ticket/support'
import { Artist } from './ticket/artist'
import Delete from './delete'

const Gig = ({ gig, type }) => {
  const gigFormatted = formatGig(gig.id, gig.songKickGig)
  // const popularityAmount = Math.round(gigFormatted.popularity * 100)
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
  } = gigFormatted

  return (
    <Card
      titleContent={
        <>
          <Artist
            id={id}
            activeRating={rating}
            artist={artist}
            type={type}
            festival={festival}
          />
          <Support supports={supports} />
        </>
      }
    >
      <CardContent>
        <Ticket>
          <TicketLeft>
            <Details>
              <Date gigDate={date} />
              <Venue location={location} venue={venue} time={time} />
            </Details>
          </TicketLeft>
        </Ticket>
      </CardContent>
      <CardFooter>
        <Delete gigId={id} />
      </CardFooter>
    </Card>
  )
}

export default Gig
