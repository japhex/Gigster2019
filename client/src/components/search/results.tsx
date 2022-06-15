import { ResultsList } from 'components/gigs/styles/search-results.styled'
import GigResultParent from 'components/search/result'


const Results = ({ gigs }) => (
  <ResultsList>
    {gigs.map(gig => (
      <GigResultParent gig={gig} />
    ))}
    {gigs.length === 0 && <>No results.</>}
  </ResultsList>
)

export default Results
