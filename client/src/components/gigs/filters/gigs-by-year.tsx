import { useContext, useRef, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import { getGigs, getGigsFilteredByYear } from 'api/gigs/gigs'
import { FilterButton } from 'components/gigs/filters/styled/filter-button'
import { MonthList, Month } from 'components/gigs/filters/styled/filters'
import AppContext from 'context/app/context'
import useOutsideClick from 'middleware/hooks/useOutsideClick'
import { client } from 'utils/apollo'
import { years } from 'utils/constants'

const YearFilter = () => {
  const ref = useRef()
  // @ts-ignore
  const { scroll, setScroll } = useContext(AppContext)
  const [year, setYear] = useState<number>(1)
  const [showYears, setShowYears] = useState<boolean>(false)
  const [getFilteredGigs] = useLazyQuery(getGigsFilteredByYear, {
    variables: { year },
    // @ts-ignore
    client,
    onCompleted: data => {
      client.writeQuery({
        query: getGigs,
        data: { gigs: data.gigsYearFilter },
      })
    },
    fetchPolicy: 'network-only',
  })

  const handleClick = (selectedYear: number) => {
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

  useOutsideClick({ ref, callback: handleOutsideClick })

  return (
    // @ts-ignore
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

export default YearFilter
