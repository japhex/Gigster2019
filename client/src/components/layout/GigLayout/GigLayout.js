import React from 'react'
import Header from './../Header/Header'

const GigLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default GigLayout
