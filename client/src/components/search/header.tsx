import { GigResultHeader, Bands, Band, Date, Venue, Location } from 'components/gigs/styles/search-results.styled'
import moment from 'moment/moment'


const GigResultHeaderParent = ({ gig }) => (
  <GigResultHeader>
    <Bands>
      {gig.performance.map(band => band.billingIndex === 1 && <Band>{band.displayName}</Band>)}
      <Venue>{gig.venue.displayName}</Venue>
      <Location>{gig.location.city}</Location>
    </Bands>
    <Date>{moment(gig.start.date).format('MMM Do YYYY')}</Date>
  </GigResultHeader>
)

export default GigResultHeaderParent
