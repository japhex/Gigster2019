import React from 'react'

import Filters from '../../../layout/gig-filters'
import Header from '../../../layout/header'

const GigLayout = ({ children }) => (
  <>
    <Header />
    <Filters />
    {children}
  </>
)

export default GigLayout
