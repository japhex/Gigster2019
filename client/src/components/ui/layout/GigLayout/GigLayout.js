import React from 'react'
import Header from '../../../layout/header'

const GigLayout = ({ children }) => (
  <div>
    <Header />
    Gig Filters:
    {children}
  </div>
)

export default GigLayout
