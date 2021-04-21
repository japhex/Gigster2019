import React from 'react'

import { GlobalStyle } from '../../../../AppStyled'

import { UnauthenticatedLayoutContainer } from './UnauthenticatedLayoutStyled'

const UnauthenticatedLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <UnauthenticatedLayoutContainer>{children}</UnauthenticatedLayoutContainer>
  </>
)

export default UnauthenticatedLayout
