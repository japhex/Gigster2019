import React, { useState } from 'react'

import FestivalFilter from 'components/gigs/filters/gigs-by-festival'
import FestivalFilterUnfiltered from 'components/gigs/filters/gigs-by-festival-unfilter'
import MonthFilter from 'components/gigs/filters/gigs-by-month'
import YearFilter from 'components/gigs/filters/gigs-by-year'
import {
  Filter,
  FiltersContainer,
} from 'components/gigs/filters/styled/filters'

const Filters = () => {
  const [filtered, setFiltered] = useState(false)

  const handleFilterClick = () => {
    setFiltered(!filtered)
  }
  return (
    <FiltersContainer>
      <Filter>
        <FestivalFilterUnfiltered
          handleFilterClick={() => handleFilterClick()}
        />
        <FestivalFilter handleFilterClick={() => handleFilterClick()} />
      </Filter>
      <Filter>
        <MonthFilter />
      </Filter>
      <Filter>
        <YearFilter />
      </Filter>
    </FiltersContainer>
  )
}

export default Filters
