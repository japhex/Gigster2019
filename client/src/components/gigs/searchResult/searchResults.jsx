import React from 'react'

import { ResultsList } from '../styles/searchResultsStyled'

import GigResultParent from './result'

const SearchResults = ({ gigs }) => (
  <ResultsList>
    {gigs?.map(gig => (
      <GigResultParent gig={gig} />
    ))}
  </ResultsList>
)

export default SearchResults
