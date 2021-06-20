import React, { useContext, useState, useRef } from 'react'

import { useLazyQuery } from '@apollo/client'

import { getGigs, getGigsFilteredByMonth } from 'api/gigs/gigs'
import { client } from 'App'
import { FilterButton } from 'components/gigs/filters/styled/filter-button'
import { MonthList, Month } from 'components/gigs/filters/styled/filters'
import AppContext from 'context/app/context'
import useOutsideClick from 'hooks/useOutsideClick'
import { months } from 'utils/constants'

const MonthFilter = () => {
  const ref = useRef()
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

  const handleClick = (e, selectedMonth) => {
    setMonth(selectedMonth)
    handleShowMonths()
    getFilteredGigs()
  }

  const handleShowMonths = () => {
    setShowMonths(!showMonths)
    setScroll(!scroll)
  }

  const handleOutsideClick = () => {
    setShowMonths(false)
    setScroll(true)
  }

  useOutsideClick(ref, handleOutsideClick)

  return (
    <FilterButton onClick={handleShowMonths} ref={ref}>
      <span>Months</span>
      {showMonths && (
        <MonthList>
          {months.map((monthName, index) => (
            <Month key={monthName} onClick={e => handleClick(e, index)}>
              {monthName}
            </Month>
          ))}
        </MonthList>
      )}
    </FilterButton>
  )
}

export default MonthFilter
