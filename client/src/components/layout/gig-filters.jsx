import React, { useState } from 'react'

import FestivalFilter from '../gigs/filters/gigs-by-festival'
import FestivalFilterUnfiltered from '../gigs/filters/gigs-by-festival-unfilter'
import MonthFilter from '../gigs/filters/gigs-by-month'
import { Filter, FiltersContainer } from '../gigs/filters/styled/filters'

const Filters = () => {
  const [filtered, setFiltered] = useState(false)

  const handleFilterClick = () => {
    setFiltered(!filtered)
  }
  return (
    <FiltersContainer>
      <Filter>
        <FestivalFilter handleFilterClick={() => handleFilterClick()} />
        <FestivalFilterUnfiltered
          handleFilterClick={() => handleFilterClick()}
        />
      </Filter>
      <Filter>
        <MonthFilter />
      </Filter>
    </FiltersContainer>
  )
}

export default Filters
