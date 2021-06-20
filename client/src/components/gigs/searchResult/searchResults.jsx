import GigResultParent from 'components/gigs/searchResult/result'
import { ResultsList } from 'components/gigs/styles/searchResultsStyled'

const SearchResults = ({ gigs }) => (
  <ResultsList>
    {gigs?.map(gig => (
      <GigResultParent gig={gig} />
    ))}
  </ResultsList>
)

export default SearchResults
