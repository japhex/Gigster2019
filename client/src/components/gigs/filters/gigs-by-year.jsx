import React, { useContext, useRef, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { getGigs, getGigsFilteredByYear } from '../../../api/gigs/gigs'
import { client } from '../../../App'
import AppContext from '../../../context/app/context'
import useOutsideClick from '../../../hooks/useOutsideClick'
import { years } from '../../../utils/constants'

import { FilterButton } from './styled/filter-button'
import { MonthList, Month } from './styled/filters'

const MonthFilter = () => {
  const ref = useRef()
  const { scroll, setScroll } = useContext(AppContext)
  const [year, setYear] = useState('')
  const [showYears, setShowYears] = useState(false)
  const [getFilteredGigs] = useLazyQuery(getGigsFilteredByYear, {
    variables: { year },
    client,
    onCompleted: data => {
      client.writeQuery({
        query: getGigs,
        data: { gigs: data.gigsYearFilter },
      })
    },
    fetchPolicy: 'network-only',
  })

  const handleClick = selectedYear => {
    setYear(selectedYear)
    handleShowYears()
    getFilteredGigs()
  }

  const handleShowYears = () => {
    setShowYears(!showYears)
    setScroll(!scroll)
  }

  const handleOutsideClick = () => {
    setShowYears(false)
    setScroll(true)
  }

  useOutsideClick(ref, handleOutsideClick)

  return (
    <FilterButton onClick={handleShowYears} ref={ref}>
      <span>Years</span>
      {showYears && (
        <MonthList>
          {years().map(yearName => (
            <Month key={yearName} onClick={() => handleClick(yearName)}>
              {yearName}
            </Month>
          ))}
        </MonthList>
      )}
    </FilterButton>
  )
}

export default MonthFilter