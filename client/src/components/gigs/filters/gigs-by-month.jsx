import React, { useContext, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { getGigs, getGigsFilteredByMonth } from '../../../api/gigs/gigs'
import { client } from '../../../App'
import AppContext from '../../../context/app/context'
import { months } from '../../../utils/constants'

import { FilterButton } from './styled/filter-button'
import { MonthList, Month } from './styled/filters'

const MonthFilter = () => {
  const { scroll, setScroll } = useContext(AppContext)
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
    handleShowMonths()
    getFilteredGigs()
  }

  const handleShowMonths = () => {
    setShowMonths(!showMonths)
    setScroll(!scroll)
  }

  // if (loading || error) <QueryHandler loading={loading} error={error} />

  return (
    <FilterButton onClick={handleShowMonths}>
      <span>Months</span>
      {showMonths && (
        <MonthList>
          {months.map((monthName, index) => (
            <Month key={monthName} onClick={() => handleClick(index)}>
              {monthName}
            </Month>
          ))}
        </MonthList>
      )}
    </FilterButton>
  )
}

export default MonthFilter
