import { ResultsList } from 'components/gigs/styles/searchResultsStyled'
import GigResultParent from 'components/search/result'

const Results = ({ gigs }) => (
  <ResultsList>
    {gigs?.map(gig => (
      <GigResultParent gig={gig} />
    ))}
  </ResultsList>
)

export default Results
