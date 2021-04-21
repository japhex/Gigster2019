import React, { useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { getGigs, getGigsFilteredByMonth } from '../../../api/gigs/gigs'
import { client } from '../../../App'
import { months } from '../../../utils/constants'

import { FilterButton } from './styled/filter-button'
import { MonthList } from './styled/filters'

const MonthFilter = () => {
  const [month, setMonth] = useState('')
  const [showMonths, setShowMonths] = useState(false)
  const [getFilteredGigs] = useLazyQuery(getGigsFilteredByMonth, {
    variables: { month },
    client,
    onCompleted: data => {
      client.writeQuery({
        query: getGigs,
        data: { gigs: data.gigsMonthFilter },
      })
    },
    fetchPolicy: 'network-only',
  })

  const handleClick = selectedMonth => {
    setMonth(selectedMonth)
    getFilteredGigs()
  }

  // if (loading || error) <QueryHandler loading={loading} error={error} />

  return (
    <FilterButton>
      <span onClick={() => setShowMonths(!showMonths)}>Months</span>
      {showMonths && (
        <MonthList>
          {months.map((monthName, index) => (
            <li key={monthName} onClick={() => handleClick(index)}>
              {monthName}
            </li>
          ))}
        </MonthList>
      )}
    </FilterButton>
  )
}

export default MonthFilter
