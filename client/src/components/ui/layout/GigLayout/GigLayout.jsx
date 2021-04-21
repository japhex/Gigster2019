import React, { useContext } from 'react'

import { GlobalStyle } from '../../../../AppStyled'
import AppContext from '../../../../context/app/context'
import Filters from '../../../layout/gig-filters'
import Header from '../../../layout/header'

const GigLayout = ({ children }) => {
  const { scroll } = useContext(AppContext)

  return (
    <>
      <GlobalStyle scroll={scroll} />
      <Header />
      <Filters />
      {children}
    </>
  )
}

export default GigLayout
