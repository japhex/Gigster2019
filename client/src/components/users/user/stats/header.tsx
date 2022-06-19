import StatBox from 'components/users/user/stats/box'
import { StatsHeader } from 'components/users/user/styles/header-styled'

const GigList = ({ user }) => (
  <StatsHeader>
    {/*<StatBox digit={user?.oldGigs?.length || 0} message="Past gigs" />*/}
    <StatBox digit={user?.gigs?.length || 0} message="Upcoming gigs" />
  </StatsHeader>
)

export default GigList
