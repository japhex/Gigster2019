import { useContext, useState, useRef, SyntheticEvent } from 'react'

import { useLazyQuery } from '@apollo/client'
import { getGigs, getGigsFilteredByMonth } from 'api/gigs/gigs'
import { FilterButton } from 'components/gigs/filters/styled/filter-button'
import { MonthList, Month } from 'components/gigs/filters/styled/filters'
import AppContext from 'context/app/context'
import useOutsideClick from 'middleware/hooks/useOutsideClick'
import { client } from 'utils/apollo'
import { months } from 'utils/constants'

const MonthFilter = () => {
  const ref = useRef()
  // @ts-ignore
  const { scroll, setScroll } = useContext(AppContext)
  const [month, setMonth] = useState<number>(1)
  const [showMonths, setShowMonths] = useState<boolean>(false)
  const [getFilteredGigs] = useLazyQuery(getGigsFilteredByMonth, {
    variables: { month },
    // @ts-ignore
    client,
    onCompleted: data => {
      client.writeQuery({
        query: getGigs,
        data: { gigs: data.gigsMonthFilter },
      })
    },
    fetchPolicy: 'network-only',
  })

  const handleClick = (e: SyntheticEvent, selectedMonth: number) => {
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

  useOutsideClick({ ref, callback: handleOutsideClick })

  return (
    // @ts-ignore
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
